const router = require("express").Router();
const auth = require("../middlewares/auth");
const User = require("../models/user");

router.get("/", auth({ block: true }), async (req, res) => {
  const user = await User.findById(res.locals.userId);
  res.json({ user });
});

router.get("/dashboards/:id", async (req, res) => {});

router.get("/dashboards/:id/todos", async (req, res) => {});

router.get("/dashboards/:id/todos/:todoId", async (req, res) => {});

router.post("/dashboards", async (req, res) => {});

router.post("/dashboards/:id/todos", async (req, res) => {});

router.patch("/dashboards/:id", async (req, res) => {});

router.patch("/dashboards/:id/todos/todoId", async (req, res) => {});

router.delete("/dashboards/:id", async (req, res) => {});

router.delete("/dashboards/:id/todos/:todoId", async (req, res) => {});

module.exports = router;
