require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT;

const corsOptions = {
  origin: process.env.APP_URL,
  optionsSuccessStatus: 200,
};

const myLoggerMiddleware = (req, res, next) => {
  console.log("logging request");
  next();
};

const myAuthMiddleware = (req, res, next) => {
  console.log("under authentication");
  const userId = 1``;
  res.locals.userId = userId;
  next();
};

const myBusinessLogicMiddleware = (req, res) => {
  if (!res.locals.userId) return res.sendStatus(401);
  console.log("my business logic runs");
  res.status(200).json("victory");
};

app.use(myLoggerMiddleware);
app.use(myAuthMiddleware);
app.use(myBusinessLogicMiddleware);

/* app.use(cors(corsOptions));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
}); */

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
