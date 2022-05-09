const tweetsModel = require("../../../models/tweets");
const twitterUsersModel = require('../../../models/twitter_users');

class Find {
  findAll() {
  }

  findById(params) {
  }
  findByKey(params){

    console.log("params===>",params)
    return new Promise((resolve, reject) => {
      tweetsModel.find({ tweet: { $regex: '.*' + params.key + '.*' }}).select('_id user_id tweet')
        .then((response) => {
          resolve(response);
        })
        .catch((err) => {
          reject(err);
        });
    });

  }


  findMultiTweet(params) {
    var array1 = []
    var array2 = []
    let finalObj = {}
    return new Promise((resolve, reject) => {
      tweetsModel.find({user_id:{$in:params.multiTweetArray}}).sort({_id: -1}).select('_id user_id tweet')
        .then((response) => {
          twitterUsersModel.find({_id:{$in:params.multiTweetArray}}).select('_id first_name last_name full_name email mobile user_name')
          .then((response1) => {
            array1 = [...response];
            array2 = [...response1];
            finalObj = {
              "match_user":array2,
              "tweets" :array1
            }
            resolve(finalObj);
          })
          .catch((err) => {
            reject(err);
          });
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
}

module.exports = {
  FindClass: Find,
};
