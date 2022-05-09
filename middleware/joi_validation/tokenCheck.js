const Joi = require("joi");
const sendRsp = require("../../helpers/response").sendRsp;
const twitterUsersModel = require("../../models/twitter_users");

const employeeSaveValidation = Joi.object({
  id: Joi.string().required().length(24).alphanum(),
});

const login = (params) => {
  return new Promise((resolve, reject) => {
    twitterUsersModel
      .count({
        token: params,
      })
      .then((response) => {
        resolve(response);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

const tokenValidation = async (req, res, next) => {
  let errors = [];
  try {
    let tokenCheck = await login(req.headers["x-access-token"]);
    if (tokenCheck < 1) {
      errors.push(error.message.replace(/['"]+/g, ""));
      throw { status_code: 400, message: { errors } };
    } else {
      next();
    }
  } catch (error) {
    return sendRsp(
      res,
      error.status_code ? error.status_code : 500,
      "Bad Request",
      error.message
    );
  }
};

module.exports = tokenValidation;
