const res = require('express/lib/response');
const FIND = require('../../../core/v1/twitter_user/find');
const SAVE = require('../../../core/v1/twitter_user/save');
const UPDATE = require('../../../core/v1/twitter_user/update')
const staticMsg = require('../../../helpers/staticValues.json')
const jwt = require('jsonwebtoken');
const JWT = require('../../../util/jwt');


const { findAll, findById, login, countEmail, countMobile, findByName,findMultiUser } = new FIND.FindClass();
const { save } = new SAVE.SaveClass(); 
const { follow,follower } = new UPDATE.UpdateClass(); 

async function saveService(params) {
    try {
        let finalReponse = {}
        const alreadyExist = params.email != "" ?  await countEmail(params) : await countMobile(params)
        if(alreadyExist === 0 ){
        const insertData = await save(params);
        finalReponse = {
            data: insertData,
            message: staticMsg.user.insert[200]
        }
        return finalReponse
        }
        else{
        finalReponse = {
            data: null,
            message: staticMsg.user["409"]
        }
        return finalReponse
        }
    } catch (error) {
        console.error('ERROR : service || v1 || employee || saveService() : ', error);
        throw error;
    }
}
async function loginService(params) {
    try {
        let finalReponse = {}
        const insertData = await login(params);
        if(insertData != null){
        const x_access_token = await JWT.generateToken(insertData)
        //const validate = await JWT.validateTokenExpiry(x_access_token)
        insertData.token = x_access_token.x_access_token
        finalReponse = {
            data: insertData,
            message: staticMsg.user.loginSucess
        }               
        return finalReponse
        }else{
            finalReponse = {
                data: insertData,
                message: staticMsg.user.loginFail
            }               
            return finalReponse  
        }
    } catch (error) {
        console.error('ERROR : service || v1 || employee || saveService() : ', error);
        throw error;
    }
}

async function findByIdService(params) {
    try {
        let finalResponse = {}
        const userById = await findById(params);
        console.log("userById===>",userById)
        if (userById) {
            return finalResponse = { data: userById, message: staticMsg.user.findById[200] }
        } else {
            return finalResponse = { data: [], message: staticMsg.user.findById[404] }
        }
    } catch (error) {
        console.error('ERROR : service || v1 || user || findByIdService() : ', error);
        throw error;
    }
}

async function findByNameService(params) {
    try {
        let finalResponse = {}
        const userByName = await findByName(params);
        console.log("userByName===>",userByName)
        if (userByName.length > 0) {
            return finalResponse = { data: userByName, message: staticMsg.user.findById[200] }
        } else {
            return finalResponse = { data: [], message: staticMsg.user.findById[404] }
        }
    } catch (error) {
        console.error('ERROR : service || v1 || user || findByIdService() : ', error);
        throw error;
    }
}

async function followService(params) {
    try {
        let finalReponse = {}
        const insertData = await follow(params);
        const followerData = await follower(params);
        finalReponse = {
            data: insertData,
            message: staticMsg.user.insert[200]
        }
        return finalReponse
    } catch (error) {
        console.error('ERROR : service || v1 || employee || saveService() : ', error);
        throw error;
    }
}

async function findMultiUserService(params) {
    try {
        const insertData = await findMultiUser(params);
        finalReponse = {
            data: insertData,
            message: staticMsg.user.find[200]
        }
        return finalReponse
    } catch (error) {
        console.error('ERROR : service || v1 || employee || saveService() : ', error);
        throw error;
    }
}

/* async function findAllService(params) {
   
} */


module.exports = {
    saveService,
    loginService,
    findByIdService,
    findByNameService,
    followService,
    findMultiUserService
};
