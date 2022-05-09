const router = require("express").Router();
var { tweetsController } = require("../../../controllers/v1/tweets/tweets");
const tokenCheck = require("../../../middleware/joi_validation/tokenCheck");
router.post("/tweet", tokenCheck, tweetsController.saveTweetsController);
router.post("/tweetFind", tokenCheck, tweetsController.findTweetsController);
router.post(
  "/multiTweetFind",
  tokenCheck,
  tweetsController.multiTweetsController
);
module.exports = router;
