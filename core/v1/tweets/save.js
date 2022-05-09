const tweetsModel = require('../../../models/tweets');

class Save {
   
    save(params) {
        return new Promise((resolve, reject) => {
                tweetsModel.insertMany({
                    user_id: params.user_id,
                    tweet: params.tweet
            }).then((response) => {
                resolve(response);
            }).catch((err) => {
                console.error('ERROR : core || v1 || employee || save() : ', err);
                reject(err);
            });
        });
    }
}

module.exports = {
    SaveClass: Save,
};
