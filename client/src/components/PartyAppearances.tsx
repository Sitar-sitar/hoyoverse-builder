import { uiDictionary } from "@/content/ui";
import React from "react";
import type { PartyAppearance } from "../../../server/parties/appearances";

const copy = uiDictionary({
  "data": "ui.components_PartyAppearances.dictionary1.data",
  "heading": "ui.components_PartyAppearances.dictionary1.heading",
  "note": "ui.components_PartyAppearances.dictionary1.note",
  "origin": "ui.components_PartyAppearances.dictionary1.origin",
  "updated": "ui.components_PartyAppearances.dictionary1.updated",
  "version": "ui.components_PartyAppearances.dictionary1.version"
});

export default function PartyAppearances({
  appearances,
  language,
}: {
  appearances: unknown;
  language: keyof typeof copy;
}) {
  if (!Array.isArray(appearances) || appearances.length === 0) return null;
  const text = copy[language];
  return (
    <div className="mt-8" data-party-appearances>
      <h4 className="display-serif text-xl font-semibold">{text.heading}</h4>
      <p className="mt-2 text-sm leading-6 text-stone-600">{text.note}</p>
      <div className="mt-4 grid gap-4 xl:grid-cols-3">
        {(appearances as PartyAppearance[]).map(card => {
          const origin =
            card.members.find(member => member.name.ja === card.origin)?.name[
              language
            ] || card.origin;
          return (
            <article
              key={card.id}
              className="min-w-0 break-words border border-stone-300 p-4"
            >
              <h5 className="font-serif text-lg font-semibold">
                {card.title[language]}
              </h5>
              <p className="mt-2 text-xs text-stone-600">
                {text.origin}
                {origin}
              </p>
              <ul className="mt-4 space-y-2">
                {card.members.map((member, index) => (
                  <li
                    key={index}
                    className="flex flex-wrap justify-between gap-x-3 gap-y-1 border-b border-stone-200 pb-2 text-xs"
                  >
                    <span className="font-semibold">
                      {member.name[language]}
                    </span>
                    <span className="text-stone-500">
                      {member.role[language]}
                    </span>
                  </li>
                ))}
              </ul>
              <dl className="mt-4 space-y-1 text-xs text-stone-600">
                <div>
                  <dt className="inline">{text.version}: </dt>
                  <dd className="inline">{card.gameVersion}</dd>
                </div>
                <div>
                  <dt className="inline">{text.data}: </dt>
                  <dd className="inline">{card.dataAsOf}</dd>
                </div>
                <div>
                  <dt className="inline">{text.updated}: </dt>
                  <dd className="inline">{card.updatedAt}</dd>
                </div>
              </dl>
              <a
                className="mt-3 inline-block text-xs text-amber-800 underline underline-offset-4"
                href={card.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {card.sourceLabel[language]}
              </a>
            </article>
          );
        })}
      </div>
    </div>
  );
}
