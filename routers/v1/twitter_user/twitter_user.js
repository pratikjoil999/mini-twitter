const router = require("express").Router();
var {
  twitterUserController,
} = require("../../../controllers/v1/twitter_user/twitter_user");
const tokenCheck = require("../../../middleware/joi_validation/tokenCheck");
router.post("/addEmployee", twitterUserController.saveTwitterUserController);
router.post("/login", twitterUserController.loginTwitterUserController);
router.get(
  "/getUser/:id",
  tokenCheck,
  twitterUserController.findUserByIdController
);
router.get(
  "/searchUser/:name",
  tokenCheck,
  twitterUserController.findUserByNameController
);
router.post(
  "/follow",
  tokenCheck,
  twitterUserController.followTwitterUserController
);
router.get(
  "/findMultipleUser",
  tokenCheck,
  twitterUserController.findMultipleUserTwitterController
);
router.post(
  "/logout",
  tokenCheck,
  twitterUserController.logoutTwitterController
);
module.exports = router;
