const express = require("express");
const helmet = require("helmet");
const projectsRouter = require("../projects/projects-router");
const resourcesRouter = require("../resources/resources-router");
const tasksRouter = require("../tasks/router-tasks");

const server = express();

server.use(express.json());
server.use(helmet());

server.use("/projects", projectsRouter);
server.use("/resources", resourcesRouter);
server.use("/tasks", tasksRouter);
module.exports = server;
