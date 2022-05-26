const express = require("express");
const cors = require("cors");
const logger = require("./middlewares/logger");
const auth = require("./middlewares/auth");
const errorHandler = require("./middlewares/errorHandler");
const dasboardRouter = require("./routes/dashboard.js");

const app = express();

app.use(
  cors({
    origin: process.env.APP_URL,
  })
);
app.use(express.json()); // body-ban erkezo json-t parseolni tudja
app.use(logger); // use this middleware on every request

app.use("/api/dashboards", dasboardRouter);

app.get("/api/public", (req, res) => {
  console.log("public");
  res.send("Hello World! - Public");
});

app.get("/api/private", auth({ block: true }), (req, res) => {
  console.log("private");
  res.send(`Hello World! - Private ${res.locals.userId}`);
});

app.get("/api/prublic", auth({ block: false }), (req, res) => {
  if (!res.locals.userId) return res.send("Hello World! - Public");
  res.send(`Hello World! - Prublic ${res.locals.userId}`);
});

app.use(errorHandler);

console.log("eddig jo");

module.exports = app;
