import path from "node:path";

/**
 * NODE_ENV=production で実サーバーを起動する試験用のDB設定。起動前検証（databaseConnection.ts）を通すためだけの値で、
 * 接続先は到達しない（poolは遅延生成のため起動時に接続しない）。CAは秘密鍵を持たない試験用自己署名証明書。
 */
export const PRODUCTION_DB_TEST_ENV = {
  DATABASE_URL: "mysql://test:test@127.0.0.1:9/test",
  DATABASE_SSL_CA_FILE: path.resolve(import.meta.dirname, "test-ca-bundle.pem"),
};
