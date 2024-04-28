const pool = new pg.Pool({
    // Render.comのDBの接続情報に変える
    database: "test_webapp",
    user: "test_webApp",
    password: "TAM94q0UDesFe37oW9xmzn11JEtbHrye",
    host: "dpg-cohqq8n79t8c7386gln0-a.singapore-postgres.render.com",
  
    // Render.comのDBではSSLが求められる
    ssl: {
      rejectUnauthorized: false, // 証明書の検証はいったん無しで
    },
    max: 10,
  });