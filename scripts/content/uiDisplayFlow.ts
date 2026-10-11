import ts from "typescript";

export const DISPLAY_ATTRIBUTES = new Set([
  "children",
  "title",
  "placeholder",
  "alt",
  "aria-label",
  "aria-description",
  "label",
  "detail",
  "description",
  "caption",
  "message",
  "text",
  "summary",
  "heading",
]);
type Environment = Map<ts.Node, ts.Expression[]>;
type Resolver = (
  from: ts.SourceFile,
  module: string
) => ts.SourceFile | undefined;

/** Follow local values and helper returns to JSX sinks, without treating conditions,
 * route IDs, class names or event handlers as displayed copy. */
export function displayTextNodes(
  ast: ts.SourceFile,
  resolveImport?: Resolver
): Set<ts.Node> {
  const result = new Set<ts.Node>();
  const active = new Set<ts.Node>();
  const definitions = new Map<ts.SourceFile, Map<string, ts.Node[]>>();
  function index(source: ts.SourceFile) {
    const cached = definitions.get(source);
    if (cached) return cached;
    const names = new Map<string, ts.Node[]>();
    function visit(node: ts.Node) {
      if (
        (ts.isVariableDeclaration(node) ||
          ts.isParameter(node) ||
          ts.isBindingElement(node) ||
          ts.isFunctionDeclaration(node) ||
          ts.isImportSpecifier(node) ||
          ts.isImportClause(node)) &&
        node.name &&
        ts.isIdentifier(node.name)
      ) {
        const entries = names.get(node.name.text) ?? [];
        entries.push(node);
        names.set(node.name.text, entries);
      }
      ts.forEachChild(node, visit);
    }
    visit(source);
    definitions.set(source, names);
    return names;
  }
  function scope(node: ts.Node): ts.Node {
    if (ts.isBindingElement(node)) return scope(node.parent.parent);
    if (ts.isParameter(node)) return node.parent;
    let parent = node.parent;
    while (
      parent &&
      !ts.isBlock(parent) &&
      !ts.isSourceFile(parent) &&
      !ts.isArrowFunction(parent)
    )
      parent = parent.parent;
    return parent ?? node.getSourceFile();
  }
  function declaration(node: ts.Identifier): ts.Node | undefined {
    return index(node.getSourceFile())
      .get(node.text)
      ?.filter(candidate => {
        const owner = scope(candidate);
        return owner.pos <= node.pos && owner.end >= node.end;
      })
      .sort(
        (a, b) => scope(a).end - scope(a).pos - (scope(b).end - scope(b).pos)
      )[0];
  }
  function imported(node: ts.Node): ts.Node | undefined {
    if (
      !resolveImport ||
      (!ts.isImportSpecifier(node) && !ts.isImportClause(node))
    )
      return undefined;
    let owner: ts.Node = node;
    while (!ts.isImportDeclaration(owner) && owner.parent) owner = owner.parent;
    if (
      !ts.isImportDeclaration(owner) ||
      !ts.isStringLiteral(owner.moduleSpecifier)
    )
      return undefined;
    const source = resolveImport(
      owner.getSourceFile(),
      owner.moduleSpecifier.text
    );
    if (!source) return undefined;
    if (ts.isImportSpecifier(node))
      return index(source)
        .get(node.propertyName?.text ?? node.name.text)
        ?.find(
          item =>
            item.parent === source ||
            (ts.isVariableDeclaration(item) &&
              item.parent.parent.parent === source)
        );
    return source.statements.find(
      item =>
        ts.isFunctionDeclaration(item) &&
        item.modifiers?.some(
          modifier => modifier.kind === ts.SyntaxKind.DefaultKeyword
        )
    );
  }
  function values(
    node: ts.Expression,
    environment: Environment
  ): ts.Expression[] {
    if (
      ts.isParenthesizedExpression(node) ||
      ts.isAsExpression(node) ||
      ts.isNonNullExpression(node) ||
      ts.isSatisfiesExpression(node)
    )
      return values(node.expression, environment);
    if (ts.isIdentifier(node)) {
      const declared = declaration(node);
      if (declared && environment.has(declared))
        return environment.get(declared)!;
      if (
        declared &&
        ts.isBindingElement(declared) &&
        ts.isArrayBindingPattern(declared.parent)
      ) {
        const owner = declared.parent.parent,
          index = declared.parent.elements.indexOf(declared);
        if (ts.isVariableDeclaration(owner) && owner.initializer) {
          if (
            index === 0 &&
            ts.isCallExpression(owner.initializer) &&
            ts.isIdentifier(owner.initializer.expression) &&
            owner.initializer.expression.text === "useState"
          ) {
            const initial = owner.initializer.arguments[0];
            return initial ? [initial] : [node];
          }
          const selected = property(
            owner.initializer,
            String(index),
            environment
          );
          if (selected.length) return selected;
        }
      }
      if (
        declared &&
        ts.isBindingElement(declared) &&
        ts.isObjectBindingPattern(declared.parent)
      ) {
        const owner = declared.parent.parent,
          key =
            declared.propertyName &&
            (ts.isIdentifier(declared.propertyName) ||
              ts.isStringLiteral(declared.propertyName))
              ? declared.propertyName.text
              : ts.isIdentifier(declared.name)
                ? declared.name.text
                : undefined;
        const inputs =
          environment.get(owner) ??
          ((ts.isVariableDeclaration(owner) || ts.isParameter(owner)) &&
          owner.initializer
            ? [owner.initializer]
            : []);
        const selected = inputs.flatMap(input =>
          property(input, key, environment)
        );
        return selected.length
          ? selected
          : declared.initializer
            ? [declared.initializer]
            : [node];
      }
      if (
        declared &&
        (ts.isVariableDeclaration(declared) || ts.isParameter(declared)) &&
        declared.initializer
      )
        return [declared.initializer];
      const external = declared && imported(declared);
      if (
        external &&
        ts.isVariableDeclaration(external) &&
        external.initializer
      )
        return [external.initializer];
    }
    return [node];
  }
  function property(
    node: ts.Expression,
    key: string | undefined,
    environment: Environment,
    seen = new Set<ts.Node>()
  ): ts.Expression[] {
    if (seen.has(node)) return [];
    seen.add(node);
    const found: ts.Expression[] = [];
    for (const object of values(node, environment)) {
      if (ts.isConditionalExpression(object)) {
        found.push(
          ...property(object.whenTrue, key, environment, seen),
          ...property(object.whenFalse, key, environment, seen)
        );
        continue;
      }
      if (
        object !== node &&
        !ts.isObjectLiteralExpression(object) &&
        !ts.isArrayLiteralExpression(object)
      ) {
        found.push(...property(object, key, environment, seen));
        continue;
      }
      if (ts.isObjectLiteralExpression(object))
        for (const item of object.properties) {
          if (ts.isPropertyAssignment(item)) {
            const name =
              ts.isIdentifier(item.name) ||
              ts.isStringLiteral(item.name) ||
              ts.isNumericLiteral(item.name)
                ? item.name.text
                : undefined;
            if (key === undefined || name === key) found.push(item.initializer);
          } else if (
            ts.isShorthandPropertyAssignment(item) &&
            (key === undefined || item.name.text === key)
          )
            found.push(item.name);
          else if (ts.isSpreadAssignment(item))
            found.push(...property(item.expression, key, environment, seen));
        }
      if (ts.isArrayLiteralExpression(object)) {
        if (key !== undefined && /^\d+$/.test(key)) {
          const item = object.elements[Number(key)];
          if (item && !ts.isSpreadElement(item))
            found.push(item as ts.Expression);
        } else
          for (const item of object.elements)
            found.push(
              ts.isSpreadElement(item)
                ? item.expression
                : (item as ts.Expression)
            );
      }
    }
    return found;
  }
  function returns(body: ts.ConciseBody, environment: Environment) {
    if (!ts.isBlock(body)) {
      trace(body, environment);
      return;
    }
    function visit(node: ts.Node) {
      if (
        node !== body &&
        (ts.isFunctionDeclaration(node) ||
          ts.isArrowFunction(node) ||
          ts.isFunctionExpression(node))
      )
        return;
      if (ts.isReturnStatement(node) && node.expression)
        trace(node.expression, environment);
      else ts.forEachChild(node, visit);
    }
    visit(body);
  }
  function callHelper(
    helper: ts.FunctionDeclaration | ts.ArrowFunction | ts.FunctionExpression,
    args: readonly ts.Expression[],
    environment: Environment
  ) {
    if (!helper.body) return;
    const local = new Map(environment);
    helper.parameters.forEach((parameter, index) => {
      const argument = args[index] ?? parameter.initializer;
      if (argument) local.set(parameter, values(argument, environment));
    });
    returns(helper.body, local);
  }
  function trace(node: ts.Expression, environment: Environment) {
    if (active.has(node)) return;
    active.add(node);
    try {
      if (
        ts.isJsxElement(node) ||
        ts.isJsxSelfClosingElement(node) ||
        ts.isJsxFragment(node)
      ) {
        sinks(node, environment);
        return;
      }
      if (
        ts.isStringLiteral(node) ||
        ts.isNoSubstitutionTemplateLiteral(node) ||
        ts.isTemplateExpression(node)
      ) {
        result.add(node);
        if (ts.isTemplateExpression(node))
          for (const span of node.templateSpans)
            trace(span.expression, environment);
        return;
      }
      if (ts.isIdentifier(node)) {
        for (const value of values(node, environment))
          if (value !== node) trace(value, environment);
        return;
      }
      if (
        ts.isParenthesizedExpression(node) ||
        ts.isAsExpression(node) ||
        ts.isNonNullExpression(node) ||
        ts.isSatisfiesExpression(node)
      ) {
        trace(node.expression, environment);
        return;
      }
      if (ts.isConditionalExpression(node)) {
        trace(node.whenTrue, environment);
        trace(node.whenFalse, environment);
        return;
      }
      if (ts.isBinaryExpression(node)) {
        if (
          [
            ts.SyntaxKind.PlusToken,
            ts.SyntaxKind.BarBarToken,
            ts.SyntaxKind.QuestionQuestionToken,
          ].includes(node.operatorToken.kind)
        ) {
          trace(node.left, environment);
          trace(node.right, environment);
        } else if (
          node.operatorToken.kind === ts.SyntaxKind.AmpersandAmpersandToken
        )
          trace(node.right, environment);
        return;
      }
      if (
        ts.isPropertyAccessExpression(node) ||
        ts.isElementAccessExpression(node)
      ) {
        const key = ts.isPropertyAccessExpression(node)
          ? node.name.text
          : node.argumentExpression &&
              (ts.isStringLiteral(node.argumentExpression) ||
                ts.isNumericLiteral(node.argumentExpression))
            ? node.argumentExpression.text
            : undefined;
        for (const value of property(node.expression, key, environment))
          trace(value, environment);
        return;
      }
      if (ts.isArrayLiteralExpression(node)) {
        for (const item of node.elements)
          trace(
            ts.isSpreadElement(item)
              ? item.expression
              : (item as ts.Expression),
            environment
          );
        return;
      }
      if (ts.isObjectLiteralExpression(node)) {
        for (const item of node.properties) {
          if (ts.isPropertyAssignment(item))
            trace(item.initializer, environment);
          else if (ts.isShorthandPropertyAssignment(item))
            trace(item.name, environment);
          else if (ts.isSpreadAssignment(item))
            trace(item.expression, environment);
        }
        return;
      }
      if (ts.isCallExpression(node)) {
        if (ts.isIdentifier(node.expression)) {
          if (
            node.expression.text === "String" &&
            !declaration(node.expression)
          ) {
            if (node.arguments[0]) trace(node.arguments[0], environment);
            return;
          }
          const declared = declaration(node.expression),
            external = declared && imported(declared),
            helper = external ?? declared;
          if (
            declared &&
            ts.isImportSpecifier(declared) &&
            (declared.propertyName?.text ?? declared.name.text) === "uiFormat"
          ) {
            const owner = declared.parent.parent.parent;
            if (
              ts.isImportDeclaration(owner) &&
              ts.isStringLiteral(owner.moduleSpecifier) &&
              /^@\/content\/ui(?:\.admin)?$/.test(owner.moduleSpecifier.text) &&
              node.arguments[1]
            )
              trace(node.arguments[1], environment);
          }
          if (helper && ts.isFunctionDeclaration(helper))
            callHelper(helper, node.arguments, environment);
          else if (
            helper &&
            ts.isVariableDeclaration(helper) &&
            helper.initializer &&
            (ts.isArrowFunction(helper.initializer) ||
              ts.isFunctionExpression(helper.initializer))
          )
            callHelper(helper.initializer, node.arguments, environment);
        } else if (ts.isPropertyAccessExpression(node.expression)) {
          if (
            [
              "join",
              "trim",
              "toUpperCase",
              "toLowerCase",
              "toString",
              "slice",
              "substring",
              "concat",
              "replace",
            ].includes(node.expression.name.text)
          )
            trace(node.expression.expression, environment);
          if (["join", "concat"].includes(node.expression.name.text))
            for (const argument of node.arguments) trace(argument, environment);
          if (node.expression.name.text === "replace" && node.arguments[1])
            trace(node.arguments[1], environment);
          if (["map", "flatMap"].includes(node.expression.name.text)) {
            const callback = node.arguments[0];
            if (
              callback &&
              (ts.isArrowFunction(callback) ||
                ts.isFunctionExpression(callback))
            ) {
              const local = new Map(environment),
                parameter = callback.parameters[0];
              if (parameter)
                local.set(
                  parameter,
                  property(node.expression.expression, undefined, environment)
                );
              returns(callback.body, local);
            }
          }
        }
      }
    } finally {
      active.delete(node);
    }
  }
  function sinks(node: ts.Node, environment: Environment) {
    if (
      ts.isJsxAttribute(node) &&
      DISPLAY_ATTRIBUTES.has(node.name.getText()) &&
      node.initializer &&
      ts.isStringLiteral(node.initializer)
    )
      trace(node.initializer, environment);
    if (
      (ts.isJsxOpeningElement(node) || ts.isJsxSelfClosingElement(node)) &&
      ts.isIdentifier(node.tagName)
    ) {
      const declared = declaration(node.tagName),
        helper = declared && (imported(declared) ?? declared);
      const callable =
        helper && ts.isFunctionDeclaration(helper)
          ? helper
          : helper &&
              ts.isVariableDeclaration(helper) &&
              helper.initializer &&
              (ts.isArrowFunction(helper.initializer) ||
                ts.isFunctionExpression(helper.initializer))
            ? helper.initializer
            : undefined;
      if (callable && !active.has(callable)) {
        const props = ts.factory.createObjectLiteralExpression(
          node.attributes.properties.flatMap<ts.ObjectLiteralElementLike>(
            attribute => {
              if (ts.isJsxSpreadAttribute(attribute))
                return [
                  ts.factory.createSpreadAssignment(attribute.expression),
                ];
              const initializer = attribute.initializer;
              const expression =
                initializer && ts.isJsxExpression(initializer)
                  ? initializer.expression
                  : initializer && ts.isStringLiteral(initializer)
                    ? initializer
                    : undefined;
              return expression
                ? [
                    ts.factory.createPropertyAssignment(
                      attribute.name.getText(),
                      expression
                    ),
                  ]
                : [];
            }
          )
        );
        active.add(callable);
        try {
          callHelper(callable, [props], environment);
        } finally {
          active.delete(callable);
        }
      }
    }
    if (
      ts.isJsxExpression(node) &&
      node.expression &&
      (!ts.isJsxAttribute(node.parent) ||
        DISPLAY_ATTRIBUTES.has(node.parent.name.getText()))
    )
      trace(node.expression, environment);
    ts.forEachChild(node, child => sinks(child, environment));
  }
  sinks(ast, new Map());
  return result;
}
