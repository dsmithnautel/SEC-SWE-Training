const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const tweetSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  tweet: {
    type: String,
    required: true,
  },
  date: {
    type: String,
  }
});
module.exports = mongoose.model("tweet", tweetSchema);