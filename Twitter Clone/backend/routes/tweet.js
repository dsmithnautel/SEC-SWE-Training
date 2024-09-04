const express = require("express");
const router = express.Router();
const tweetController = require("../controllers/tweetController");

router.route("/").get(tweetController.getTweets);
router.route("/").post(tweetController.createNewTweet);

module.exports = router;