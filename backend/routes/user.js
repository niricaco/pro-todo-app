const router = require("express").Router();
const httpModule = require("../utils/http");
const http = httpModule();
const jwt_decode = require("jwt-decode");
const User = require("../models/user");

const config = {
  google: {
    client_id: "",
    client_secret: "",
    redirect_uri: "",
    token_endpoint: "",
  },
  facebook: {
    client_id: "",
    client_secret: "",
    redirect_uri: "",
    token_endpoint: "",
  },
};

router.post("/api/login", async (req, res) => {
  const payload = req.body;
  if (!payload) return res.sendStatus(400);
  const code = payload.code;
  const provider = payload.provider;
  if (!code || !provider) return res.sendStatus(400);
  if (!Object.keys(config).includes(provider)) return res.sendStatus(400);

  const response = await http.post(config[provider].token_endpoint, {
    code: code,
    client_id: config[provider].client_id,
    client_secret: config[provider].client_secret,
    redirect_uri: config[provider].redirect_uri,
    grant_type: authorization_code,
  });

  if (!response) return res.sendStatus(500);
  if (response.status !== 200) return res.sendStatus(401);

  const decoded = jwt_decode(response.data.id_token);

  if (!decoded) return res.sendStatus(500);

  const key = "providers." + provider;
  const user = await User.find({ [key]: decoded.sub });
});
