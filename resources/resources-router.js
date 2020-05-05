const express = require("express");
const Resource = require("./resources-helpers");
const router = express.Router({
  mergeParams: true
});

router.get("/", async (req, res, next) => {
  try {
    const resources = await Resource.find();
    res.json(resources);
  } catch (err) {
    console.log("GET: Resource", err);
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const resource = await Resource.add(req.body);
    res.json(resource);
  } catch (err) {
    console.log("POST: Resource", err);
    next(err);
  }
});

module.exports = router;
