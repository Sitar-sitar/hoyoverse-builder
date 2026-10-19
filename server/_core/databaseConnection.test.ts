import { describe, expect, it } from "vitest";
import { spawn } from "node:child_process";
import { createServer, connect } from "node:net";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
import { databaseConnection, DatabaseConfigError, validateDatabaseConfig } from "./databaseConnection";

/**
 * 本番DB設定の起動前検証（設計: docs/修正設計書_運用安定化と保守性改善_2026-10-19.md §5.5・§8.1）。
 * CA は試験専用の自己署名証明書2枚の bundle（秘密鍵は保持していない）。
 */

const here = dirname(fileURLToPath(import.meta.url));
const root = resolve(here, "../..");
const CA_BUNDLE = resolve(here, "fixtures/test-ca-bundle.pem");
const URL_OK = "mysql://user:p%40ss@db.internal:3306/app";

function codeOf(run: () => unknown) {
  try {
    run();
  } catch (error) {
    expect(error).toBeInstanceOf(DatabaseConfigError);
    return (error as DatabaseConfigError).code;
  }
  return null;
}

const prod = (overrides: Record<string, string | undefined> = {}) => ({ NODE_ENV: "production", DATABASE_URL: URL_OK, DATABASE_SSL_CA_FILE: CA_BUNDLE, ...overrides });

describe("validateDatabaseConfig（production）", () => {
  it("URLと複数証明書のCA bundleが正しければ通り、TLS検証は必ず有効", () => {
    const config = validateDatabaseConfig(prod());
    expect(config?.url).toBe(URL_OK);
    expect(config?.ca).toContain("BEGIN CERTIFICATE");
    const connection = databaseConnection(URL_OK, prod());
    expect(connection.ssl).toMatchObject({ rejectUnauthorized: true });
  });

  it.each([
    [{ DATABASE_URL: undefined }, "database_url_missing"],
    [{ DATABASE_SSL_CA_FILE: undefined }, "database_ca_missing"],
    [{ DATABASE_URL: "not a url" }, "database_url_invalid"],
    [{ DATABASE_URL: "postgres://u:p@db.internal/app" }, "database_url_scheme_invalid"],
    [{ DATABASE_URL: "mysql://u:p@db.internal:3306/" }, "database_url_database_missing"],
    [{ DATABASE_URL: `${URL_OK}?ssl=false` }, "database_url_query_forbidden"],
    [{ DATABASE_SSL_CA_FILE: resolve(here, "fixtures/does-not-exist.pem") }, "database_ca_unreadable"],
  ])("%o は %s で拒否する", (overrides, code) => {
    expect(codeOf(() => validateDatabaseConfig(prod(overrides)))).toBe(code);
  });

  it("空・PEMでない・壊れた証明書のCAを拒否する", () => {
    for (const text of ["", "hello", "-----BEGIN CERTIFICATE-----\nAAAA\n-----END CERTIFICATE-----"]) {
      expect(codeOf(() => validateDatabaseConfig(prod(), () => text))).toBe("database_ca_invalid");
    }
  });

  it("例外にURL・認証情報・CAのpathを含めない", () => {
    let message = "";
    try { validateDatabaseConfig(prod({ DATABASE_URL: `${URL_OK}?password=hunter2` })); } catch (error) { message = `${String(error)} ${(error as Error).stack}`; }
    expect(message).not.toMatch(/hunter2|p%40ss|db\.internal/);
    try { validateDatabaseConfig(prod({ DATABASE_SSL_CA_FILE: "/secrets/private-path.pem" })); } catch (error) { message = `${String(error)} ${(error as Error).stack}`; }
    expect(message).not.toContain("private-path");
  });
});

describe("validateDatabaseConfig（development/test）", () => {
  it("DB URL未設定はDBなしで動かせる（接続を作らない）", () => {
    expect(validateDatabaseConfig({ NODE_ENV: "development" })).toBeNull();
    expect(validateDatabaseConfig({})).toBeNull();
  });

  it("URLが設定されていれば形式は検証するが、CA必須とquery禁止はproductionだけ", () => {
    expect(codeOf(() => validateDatabaseConfig({ NODE_ENV: "development", DATABASE_URL: "nope" }))).toBe("database_url_invalid");
    expect(validateDatabaseConfig({ NODE_ENV: "development", DATABASE_URL: `${URL_OK}?charset=utf8mb4` })?.ca).toBeNull();
  });

  it("CAを指定した場合は不正なら失敗し、検証無効化へfallbackしない", () => {
    expect(codeOf(() => validateDatabaseConfig({ NODE_ENV: "test", DATABASE_URL: URL_OK, DATABASE_SSL_CA_FILE: CA_BUNDLE }, () => "junk"))).toBe("database_ca_invalid");
    expect(() => databaseConnection(URL_OK, { DATABASE_SSL_CA_FILE: CA_BUNDLE }, () => "junk")).toThrow(DatabaseConfigError);
  });
});

async function freePort() {
  return new Promise<number>(done => {
    const probe = createServer().listen(0, "127.0.0.1", () => {
      const port = (probe.address() as { port: number }).port;
      probe.close(() => done(port));
    });
  });
}

function run(args: string[], env: Record<string, string>) {
  return new Promise<{ code: number | null; output: string }>(done => {
    const child = spawn(process.execPath, ["--import", "tsx", ...args], { cwd: root, env: { ...process.env, ...env }, stdio: ["ignore", "pipe", "pipe"] });
    let output = "";
    child.stdout.on("data", chunk => { output += chunk; });
    child.stderr.on("data", chunk => { output += chunk; });
    child.on("exit", code => done({ code, output }));
  });
}

function isListening(port: number) {
  return new Promise<boolean>(done => {
    const socket = connect(port, "127.0.0.1");
    socket.on("connect", () => { socket.destroy(); done(true); });
    socket.on("error", () => done(false));
  });
}

describe("起動前検証の配線", () => {
  it("API: production の CA 欠落でポートを開かず終了1、ログは固定コードだけ", async () => {
    const port = await freePort();
    const result = await run(["server/_core/index.ts"], {
      NODE_ENV: "production", API_ONLY: "true", PORT: String(port), CLIENT_IP_SOURCE: "northflank", NORTHFLANK_TRUSTED_PROXY_HOPS: "1",
      DATABASE_URL: "mysql://user:hunter2@db.internal:3306/app", DATABASE_SSL_CA_FILE: "",
    });
    expect(result.code).toBe(1);
    expect(result.output).toContain("[Database] Invalid configuration: database_ca_missing");
    expect(result.output).not.toMatch(/hunter2|db\.internal/);
    expect(await isListening(port)).toBe(false);
  }, 60_000);

  it("Job: production の query 付きURLで drizzle 設定生成前に失敗する", async () => {
    const result = await run(["-e", "await import('./drizzle.config.ts')"], {
      NODE_ENV: "production", DATABASE_URL: "mysql://user:hunter2@db.internal:3306/app?ssl=false", DATABASE_SSL_CA_FILE: CA_BUNDLE,
    });
    expect(result.code).not.toBe(0);
    expect(result.output).toContain("database_url_query_forbidden");
    expect(result.output).not.toContain("hunter2");
  }, 60_000);

  it("Job: NODE_ENV 未設定のローカル generate 相当は CA なしで設定を作れる", async () => {
    const result = await run(["-e", "const m = await import('./drizzle.config.ts'); console.log(JSON.stringify(Object.keys((m.default ?? m).dbCredentials ?? {})))"], {
      NODE_ENV: "", DATABASE_URL: "mysql://user:pw@localhost:3306/app", DATABASE_SSL_CA_FILE: "",
    });
    expect(result.code).toBe(0);
    expect(result.output).toContain('["url"]');
  }, 60_000);
});
