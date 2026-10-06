# GitHub App 管理者認証

最終更新: 2026-10-06。[本番運用ガイド](northflank-production.md)を構成の入口とする。

## 認証フロー

本番管理画面は /app/admin、/app/admin/feedback、/app/admin/display。GitHub numeric user IDをADMIN_GITHUB_IDSと照合し、管理APIのadminProcedureでもallowlistを確認する。

1. PagesからNorthflankの /api/auth/github へ遷移。OAuth stateを期限10分のHttpOnly / Secure / SameSite=Lax Cookieへ保存する。
2. GitHub callbackでstateと管理者IDを検証し、DBの管理者情報を更新する。GitHub Client SecretとGitHub access tokenはバックエンドだけで扱う。
3. 期限2分・単回使用の交換コードを生成し、ハッシュをadmin_auth_exchange_codesへ保存する。Pages復帰URLのfragment admin_exchange_codeで返す。
4. フロントエンドはアプリ要求前にfragmentからコードを取り除き、POST /api/auth/github/exchangeで消費する。アプリBearer tokenの期限は1時間。Pages baseで分離したsessionStorageへ保存し、管理API要求のAuthorizationに使用する。
5. 従来のアプリsession Cookieも期限12時間、HttpOnly / Secure / SameSite=Noneで発行する。Cookieが利用可能な環境の互換経路として保持する。

第三者Cookie遮断時はBearer経路で認証する。公開Chromeで遮断条件のOAuth確認を実施済みだが、全ブラウザの受入済みとはしない。sessionStorageが使えない場合は利用可能なCookie経路に依存する。ログアウトは当該ブラウザのBearer保存とCookieを消去する操作で、全端末tokenの一括失効ではない。

## GitHub App / Northflank設定

Callback URL: https://http--hoyoverse-api--s48krvgv8tjs.code.run/api/auth/github/callback

APIのRuntime Environmentへ設定する。秘密値はNorthflank画面で直接登録し、チャット・Gitへ貼らない。

| 変数 | 内容 |
| --- | --- |
| GITHUB_APP_CLIENT_ID / GITHUB_APP_CLIENT_SECRET | GitHub App資格情報 |
| ADMIN_GITHUB_IDS | 管理者numeric user IDのallowlist |
| ADMIN_SESSION_SECRET | アプリsession署名用秘密値 |
| ADMIN_FRONTEND_URL | https://sitar-sitar.github.io/hoyoverse-builder/app |
| GITHUB_APP_CALLBACK_URL | 上記Northflank callback |
| DATABASE_URL | 内部MySQL接続URL |
| DATABASE_SSL_CA_FILE | /secrets/mysql-ca.pem、実行時CAファイルを配置 |
| NODE_ENV / API_ONLY | production / true |
| CORS_ORIGINS | https://sitar-sitar.github.io |

IP識別・受付フラグ・revisionは[環境変数例](../.env.api.example)と[設定台帳](運用管理台帳_Northflank設定_2026-10-05.md)を参照する。資格情報更新は実行中APIへ反映するためUpdate & restartを使用し、healthとOAuthを確認する。

旧Railway callbackは保持中。廃止判断前に削除しない。過去の[ログイン検証記録](admin-login-verification.md)は当時の証拠で、現行手順は本書による。
