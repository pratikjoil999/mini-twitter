module.exports.sendRsp = async (res, statusCode, msg, output) => {
    var api = {};
    api.statusCode = statusCode;
    api.messaage = msg;
    res.status(statusCode).json({ api, response: output });
}