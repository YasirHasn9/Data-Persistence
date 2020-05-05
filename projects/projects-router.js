const express = require("express");
const Projects = require("./projects-helpers");
const router = express.Router({
  mergeParams: true
});

router.get("/", async (req, res, next) => {
  try {
    const projects = await Projects.find();
    res.json(projects);
  } catch (err) {
    console.log("GET: projects", err);
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const projects = await Projects.add(req.body);
    res.json(projects);
  } catch (err) {
    console.log("GET: projects", err);
    next(err);
  }
});

module.exports = router;
