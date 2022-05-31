const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  //
  title: {
    type: String,
    required: true,
  }, // no empty string
  content: {
    type: String,
    required: true,
  }, // empty string is enough
  isDone: {
    type: Boolean,
    default: false,
  },
});

const dashboardSchema = new mongoose.Schema({
  //
  title: {
    type: String,
    required: true,
  }, // no empty string
  todos: [todoSchema], // empty list is default?
});

const userSchema = new mongoose.Schema({
  //
  username: {
    type: String,
    unique: true,
    required: true,
  }, // no empty string
  /* googleId: {
    type: String,
    unique: true,
    required: true,
  }, */ // no empty string + validation
  providers: {
    google: {
      type: String,
      unique: true,
    },
    facebook: {
      type: String,
      unique: true,
    },
  },
  dashboards: [dashboardSchema], // empty list is default?
});

const User = mongoose.model("user", userSchema);

module.exports = User;
