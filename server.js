const express = require("express");

const ReadRouter = require("./read/readRouter.js");
const CreateRouter = require("./create/createRouter.js");
const server = express();

server.use(express.json());

server.use("/api/read", ReadRouter);
server.use("/api/create", CreateRouter);

server.get("/", (req, res) => {
  res.send("<h3>DB INTRO PROJECT II</h3>");
});

module.exports = server;
