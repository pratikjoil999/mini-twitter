const twitterUsersModel = require('../../../models/twitter_users');


class Save {
    save(params) {
        return new Promise((resolve, reject) => {
            twitterUsersModel.insertMany({
                first_name : params.first_name,
                last_name: params.last_name,
                full_name: params.first_name.toLowerCase()+params.last_name.toLowerCase(),
                email: params.email,
                mobile: params.mobile,
                password: params.password,
                user_name: params.user_name,
                //dob : params.dob,
                followers : params.followers,
                following : params.following,
                token: params.token,
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
