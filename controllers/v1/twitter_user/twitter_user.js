const twitterUserService = require('../../../services/v1/twitter_user/twitter_user');
const sendRsp = require('../../../helpers/response').sendRsp;
const staticMsg = require('../../../helpers/staticValues.json')
const twitterUserController = {
    saveTwitterUserController: async (req, res) => {
        try {
            let result = await twitterUserService.saveService(req.body);
            if (result.data != null) {
                return sendRsp(res, 200, result.message, result.data);
            }
            else {
                return sendRsp(res, 409, result.message, result.data);
            }
        } catch (error) {
            return sendRsp(res, 500, staticMsg.employee[500], error.message)
        }
    },
    loginTwitterUserController: async (req, res) => {
        try {
            let result = await twitterUserService.loginService(req.body);
            if (result.data != null) {
                return sendRsp(res, 200, result.message, result.data);
            }
            else{
                return sendRsp(res, 404, result.message, result.data);
            }
        } catch (error) {
            return sendRsp(res, 500, staticMsg.user[500], error.message)
        }
    },
    findUserByIdController: async (req, res) => {
        try {
            let result = await twitterUserService.findByIdService(req.params);
            if (result) {
                return sendRsp(res, 200, result.message, result.data);
            }
        } catch (error) {
            return sendRsp(res, 500, staticMsg.employee[500], error.message)
        }
    },
    findUserByNameController: async (req, res) => {
        try {
            let result = await twitterUserService.findByNameService(req.params);
            if (result.data.length>0) {
                return sendRsp(res, 200, result.message, result.data);
            }
            else{
                return sendRsp(res, 404, result.message, result.data); 
            }
        } catch (error) {
            return sendRsp(res, 500, staticMsg.employee[500], error.message)
        }
    },
    followTwitterUserController: async (req, res) => {
        try {
            let result = await twitterUserService.followService(req.body);
            /* if (result.data != null) { */
                return sendRsp(res, 200, result.message, result.data);
            /* }
            else {
                return sendRsp(res, 409, result.message, result.data);
            } */
        } catch (error) {
            return sendRsp(res, 500, staticMsg.employee[500], error.message)
        }
    },
    findMultipleUserTwitterController: async (req, res) => {
        try {
            let result = await twitterUserService.findMultiUserService(req.body);
            /* if (result.data != null) { */
                return sendRsp(res, 200, result.message, result.data);
            /* }
            else {
                return sendRsp(res, 409, result.message, result.data);
            } */
        } catch (error) {
            return sendRsp(res, 500, staticMsg.employee[500], error.message)
        }
    }
}

module.exports = { twitterUserController }