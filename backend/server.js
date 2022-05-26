require("dotenv").config();
const mongoose = require("mongoose");
const app = require("./app");

const port = process.env.PORT;

mongoose.connect("mongodb://localhost:27017/pro-todo-app", () => {
  console.log("MongoDB connected using Mongoose.");
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
});
