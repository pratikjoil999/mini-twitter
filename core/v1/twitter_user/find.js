const twitterUsersModel = require("../../../models/twitter_users");

class Find {
  findAll() {
  }

  findById(params) {
    console.log("params===>",params)
    return new Promise((resolve, reject) => {
        twitterUsersModel.findOne({
        _id: params.id,
      }).select('first_name full_name last_name email mobile followers following dob')
        .then((response) => {
          resolve(response);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }


  findByName(params) {
    console.log("params===>",params)
    return new Promise((resolve, reject) => {
        twitterUsersModel.find({ $or: [{full_name: { $regex: '.*' + params.name + '.*' }},{user_name :{ $regex: '.*' + params.name + '.*' }}]}).select('first_name full_name last_name user_name email mobile followers following dob')
        .then((response) => {
          resolve(response);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  login(params) {
    return new Promise((resolve, reject) => {
        twitterUsersModel.findOne({
        email: params.email,
        password:params.password
      }).select('first_name last_name full_name user_name email mobile token')
        .then((response) => {
          resolve(response);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  countEmail(params) {
    return new Promise((resolve, reject) => {
        twitterUsersModel.count({
        email: params.email,
      })
        .then((response) => {
          resolve(response);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  countMobile(params) {
    return new Promise((resolve, reject) => {
        twitterUsersModel.count({
        mobile: params.mobile,
      })
        .then((response) => {
          resolve(response);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  findMultiUser(params) {
    console.log("params===>",params)
    return new Promise((resolve, reject) => {
        twitterUsersModel.find({_id:{$in:params.multiUserArray}}).select('first_name full_name last_name user_name email mobile followers following dob')
        .then((response) => {
          resolve(response);
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
