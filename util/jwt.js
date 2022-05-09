
const jwt = require('jsonwebtoken');
const JWT_CONFIG = require('./jwtConfig');
const UpdateClass = require('../core/v1/twitter_user/update');
/* const FindClass = require('../../../../core/v1/quote/find');
const findClass = require('../../../../core/v1/client_login/client_login'); */


// const {
//     validateUserToken,
// } = new FindClass.FindClass();

const {
    updateStatus,
} = new UpdateClass.UpdateClass();




async function generateToken(params) {
    try {
        const tokenParams = {
            id: params._id,
            date: new Date(),
        };
        const xAccessToken = jwt.sign(
            tokenParams,
            JWT_CONFIG.secret,
            );
        if (params._id) await updateStatus(params, xAccessToken);
 
        return { x_access_token: xAccessToken };
    } catch (error) {
        console.error(' JWT -> API -> UTIL -> jwt = > generateToken()', error);
        return error;
    }
}

async function validateTokenExpiry(params) {
    return new Promise((resolve, reject) => {
        try {
            jwt.verify(params.x_access_token, JWT_CONFIG.secret, (error, verifiedData) => {
                if (verifiedData) {
                    resolve(true);
                } else {
                    console.error(`JWT Error :: api/util/api_token.js : verifyToken() :: ${(error)}`);
                    resolve(false);
                }
            });
        } catch (error) {
            console.error(' API :: UTIL :: API TOKEN :: verifyUserDeviceAndToken() ::=>  ', error);
            reject(error);
        }
    });
}

async function verifyToken(params) {
    try {
        const validateToken = await validateTokenExpiry(params);
        const validateUser = validateToken && await validateUserToken(params);
        if (validateUser) await saveApiLog(params);
        return validateUser;
    } catch (error) {
        console.error(' error ', error);
        return error;
    }
}

module.exports = {
    generateToken,
    verifyToken,
    validateTokenExpiry
};
