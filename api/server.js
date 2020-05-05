const express = require("express");
const helmet = require("helmet");
const projectsRouter = require("../projects/projects-router");
const resourcesRouter = require("../resources/resources-router");

const server = express();

server.use(express.json());
server.use(helmet());

server.use("/projects", projectsRouter);
server.use("/resources", resourcesRouter);
module.exports = server;
