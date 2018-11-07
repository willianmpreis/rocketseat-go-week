const Tweet = require("../models/Tweet");

module.exports = {
  async index(req, res) {
    const tweets = await Tweet.find({}).sort("-createAt");
    return res.json(tweets);
  },

  async store(req, res) {
    const tweet = await Tweet.create(req.body);
    req.io.emit("tweet", tweet);
    return res.json(tweet);
  },

  async likes(req, res) {
    const tweet = await Tweet.findById(req.params.id);
    tweet.set({ likes: tweet.likes + 1 });
    tweet.save();
    req.io.emit("like", tweet);
    return res.json(tweet);
  }
};
