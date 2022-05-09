const userModel = require('../../../models/twitter_users');

class Update {
   
    updateStatus(params, xAccessToken){
        return new Promise((resolve, reject) => {
            let updateStatus = {"token" : xAccessToken}
            //console.log("updateStatus===>",updateStatus)
            userModel.findOneAndUpdate({
                _id: params._id,
            }, updateStatus,{new : true}).then((response) => {
                resolve(response);
            }).catch((err) => {
                console.error('ERROR : core || yv1 || employee :: update || Update() : ', err);
                reject(err);
            });
        });
    }
    follow(params){
        console.log("params===>",params)
        return new Promise((resolve, reject) => {
            userModel.findOneAndUpdate(
                { _id: params.id},
                {"$push": { "following": params.follow_id } },{new : true}
              ).then((response) => {
                resolve(response);
            }).catch((err) => {
                console.error('ERROR : core || yv1 || employee :: update || Update() : ', err);
                reject(err);
            });
        });
    }

    follower(params){
        console.log("params===>",params)
        return new Promise((resolve, reject) => {
            userModel.findOneAndUpdate(
                { _id: params.follow_id},
                {"$push": { "followers": params.id } },{new : true}
              ).then((response) => {
                resolve(response);
            }).catch((err) => {
                console.error('ERROR : core || yv1 || employee :: update || Update() : ', err);
                reject(err);
            });
        });
    }

}

module.exports = {
    UpdateClass: Update,
};
