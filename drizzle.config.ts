import { databaseConnection, DatabaseConfigError, validateDatabaseConfig } from "./server/_core/databaseConnection";
import { defineConfig } from "drizzle-kit";

// Job（drizzle-kit）も API と同じ起動前検証を通す。production では URL query と CA 未設定を拒否する。
let config: ReturnType<typeof validateDatabaseConfig>;
try {
  config = validateDatabaseConfig();
} catch (error) {
  throw new Error(error instanceof DatabaseConfigError ? `Invalid database configuration: ${error.code}` : "Invalid database configuration");
}
if (!config) {
  throw new Error("DATABASE_URL is required to run drizzle commands");
}

const connectionString = config.url;
const ssl = databaseConnection(connectionString).ssl;
const parsed = new URL(connectionString);

export default defineConfig({
  schema: "./drizzle/schema.ts",
  out: "./drizzle",
  dialect: "mysql",
  dbCredentials: ssl ? {
    host: parsed.hostname,
    port: Number(parsed.port || 3306),
    user: decodeURIComponent(parsed.username),
    password: decodeURIComponent(parsed.password),
    database: decodeURIComponent(parsed.pathname.slice(1)),
    ssl,
  } : { url: connectionString },
});
