const res = require("express/lib/response");
const FIND = require("../../../core/v1/tweets/find");
const SAVE = require("../../../core/v1/tweets/save");
const staticMsg = require("../../../helpers/staticValues.json");
const { findAll, findById, findByKey, findMultiTweet } = new FIND.FindClass();
const { save } = new SAVE.SaveClass();

async function saveTweetService(params) {
  try {
    let finalReponse = {};
    const insertData = await save(params);
    finalReponse = {
      data: insertData,
      message: staticMsg.tweet.insert[200],
    };
    return finalReponse;
  } catch (error) {
    console.error(
      "ERROR : service || v1 || employee || saveService() : ",
      error
    );
    throw error;
  }
}

async function findTweetService(params) {
  try {
    let finalReponse = {};
    const insertData = await findByKey(params);
    if (insertData.length > 0) {
      finalReponse = {
        data: insertData,
        message: staticMsg.tweet.findById[200],
      };
      return finalReponse;
    } else {
      finalReponse = {
        data: [],
        message: staticMsg.tweet.findById[404],
      };
      return finalReponse;
    }
  } catch (error) {
    console.error(
      "ERROR : service || v1 || employee || saveService() : ",
      error
    );
    throw error;
  }
}

async function findMultiTweetService(params) {
  try {
    const insertData = await findMultiTweet(params);
    finalReponse = {
      data: insertData,
      message: staticMsg.user.find[200],
    };
    return finalReponse;
  } catch (error) {
    console.error(
      "ERROR : service || v1 || employee || saveService() : ",
      error
    );
    throw error;
  }
}

module.exports = {
  saveTweetService,
  findTweetService,
  findMultiTweetService,
};
