import { readFileSync } from "node:fs";

/** Shared by mysql2 runtime and drizzle-kit; CA verification is never disabled. */
export function databaseConnection(url: string) {
  if (!process.env.DATABASE_SSL_CA_FILE) return { uri: url };
  return { uri: url, ssl: { ca: readFileSync(process.env.DATABASE_SSL_CA_FILE, "utf8"), rejectUnauthorized: true } };
}
