const departmentService = require('../../../services/v1/department/department');
const sendRsp = require('../../../helpers/response').sendRsp;
const staticMsg = require('../../../helpers/staticValues.json')
const departmentController = {
    findAlldepartmentController: async (req, res) => {
        try {
            let result = await departmentService.findAllService()
            if (result) {
                return sendRsp(res, 200, result.message, result.data);
            }
        } catch (error) {
            return sendRsp(res, 500, staticMsg.department[500], error.message)
        }
    },
    findDepartmentByIdController: async (req, res) => {
        try {
            let result = await departmentService.findByIdService(req.params);
            if (result) {
                return sendRsp(res, 200, result.message, result.data);
            }
        } catch (error) {
            return sendRsp(res, 500, staticMsg.department[500], error.message)
        }
    },

    saveDepartmentController: async (req, res) => {
        try {
            let result = await departmentService.saveService(req.body);
            if (result) {
                return sendRsp(res, 200, result.message, result.data);
            }
        } catch (error) {
            return sendRsp(res, 500, staticMsg.department[500], error.message)
        }
    },
    updateDepartmentController:async(req,res)=>{
        try {
            let result = await departmentService.updateService(req);
            if (result) {
                return sendRsp(res, 200, result.message, result.data);
            }
        } catch (error) {
            return sendRsp(res, 500,  staticMsg.department[500], error.message)
        }
    },
    deleteDepartmentController:async(req,res)=>{
        try {
            let result = await departmentService.deleteService(req);
            if (result) {
                return sendRsp(res, 200, result.message, result.data);
            }
        } catch (error) {
            return sendRsp(res, 500,  staticMsg.department[500], error.message)
        }
    }
}

module.exports = { departmentController }