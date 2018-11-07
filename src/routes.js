const express = require("express");

const routes = express.Router();

const TweetController = require("./controllers/TweetController");

routes.get("/tweets", TweetController.index);
routes.post("/tweets", TweetController.store);
routes.post("/likes/:id", TweetController.likes);

module.exports = routes;
