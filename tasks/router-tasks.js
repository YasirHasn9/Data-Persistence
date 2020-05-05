const express = require("express");
const Tasks = require("./task-helpers");
const router = express.Router({
  mergeParams: true
});

router.get("/", async (req, res, next) => {
  try {
    const tasks = await Tasks.find();
    res.json(tasks);
  } catch (err) {
    console.log("GET: Tasks", err);
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const task = await Tasks.add(req.body);
    res.json(task);
  } catch (err) {
    console.log("POST: Tasks", err);
    next(err);
  }
});

module.exports = router;
