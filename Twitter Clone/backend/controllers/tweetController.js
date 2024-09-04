const Tweet = require("../model/tweet");
const fns = require("date-fns");

const getTweets = async (request, response) => {
  const tweets = await Tweet.find();
  if (!tweets) return response.status(204).json({ message: "No tweets found." });
  response.json(tweets);
};

const createNewTweet = async (request, response) => {
  if (!request?.body?.username || !request?.body?.tweet) {
    return response.status(400).json( { message: "Username and tweet both required." });
  }
  try {
    const date = fns.format(new Date(), "MM/dd/yy - h:mm a");
    const result = await Tweet.create({
      username: request.body.username,
      tweet: request.body.tweety,
      date: date
    });
    response.status(200).json(result);
  }
  catch (err) {
    console.error(err);
  }
};

module.exports = { 
  getTweets,
  createNewTweet
};
