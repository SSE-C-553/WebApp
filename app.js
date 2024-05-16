import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// ルートパスへのリクエスト
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "login.html"));
});

// ログイン要求のリクエスト
app.get("/login", (req, res) => {

});

// 認証完了後のリクエスト
app.get("/success", (req, res) => {
  res.status(200).send("success");
});

import crypto from "crypto";

/* 一部処理の記載を省略 */

// リダイレクトURL生成処理
const createRedirectUrl = () => {
  const bytes = crypto.randomBytes(32);
  const state = bytes.toString("base64url");

  const redirectUrl =
    "https://access.line.me/oauth2/v2.1/authorize?" +
    "response_type=code" +
    `&client_id=${process.env.CHANNEL_ID}` +
    `&redirect_uri=${process.env.CALLBACK_URL}` +
    `&state=${state}` +
    "&scope=profile%20openid";
  return redirectUrl;
};

/* 一部処理の記載を省略 */

// ログイン要求のリクエスト
app.get("/login", (req, res) => {
  const redirect = createRedirectUrl();
  res.redirect(redirect);
});


/* 一部処理の記載を省略 */

const PORT = 3000;

/* 一部処理の記載を省略 */

// リッスンするポートの設定
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

