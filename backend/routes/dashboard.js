const router = require("express").Router();
const auth = require("../middlewares/auth");\
const User = require("../models/user")

router.get("/api/dashboards", auth({block: true}), async (req, res) => {
  const user = User.findById(res.locals.userId);
  res.json({user});
});

router.get("/api/dashboards/:id", async (req, res) => {});

router.get("/api/dashboards/:id/todos", async (req, res) => {});

router.get("/api/dashboards/:id/todos/:todoId", async (req, res) => {});

router.post("/api/dashboards", async (req, res) => {});

router.post("/api/dashboards/:id/todos", async (req, res) => {});

router.patch("/api/dashboards/:id", async (req, res) => {});

router.patch("/api/dashboards/:id/todos/todoId", async (req, res) => {});

router.delete("/api/dashboards/:id", async (req, res) => {});

router.delete("/api/dashboards/:id/todos/:todoId", async (req, res) => {});
