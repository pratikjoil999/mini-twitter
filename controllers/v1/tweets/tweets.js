const tweetsService = require('../../../services/v1/tweets/tweets');
const sendRsp = require('../../../helpers/response').sendRsp;
const staticMsg = require('../../../helpers/staticValues.json')
const tweetsController = {
    saveTweetsController: async (req, res) => {
        try {
            let result = await tweetsService.saveTweetService(req.body);
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
    findTweetsController: async (req, res) => {
        try {
            let result = await tweetsService.findTweetService(req.body);
            if (result.data.length > 0) {
                return sendRsp(res, 200, result.message, result.data);
            }
            else {
                return sendRsp(res, 409, result.message, result.data);
            }
        } catch (error) {
            return sendRsp(res, 500, staticMsg.tweet[500], error.message)
        }
    },
    multiTweetsController: async (req, res) => {
        try {
            let result = await tweetsService.findMultiTweetService(req.body);
            if (result.data.tweets.length > 0) {
                return sendRsp(res, 200, result.message, result.data);
            }
            else {
                return sendRsp(res, 409, result.message, result.data);
            }
        } catch (error) {
            return sendRsp(res, 500, staticMsg.tweet[500], error.message)
        }
    },
  
}

module.exports = { tweetsController }