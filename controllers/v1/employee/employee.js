const employeeService = require('../../../services/v1/employee/employeeService');
const sendRsp = require('../../../helpers/response').sendRsp;
const staticMsg = require('../../../helpers/staticValues.json')
const employeeController = {
    findAllEmployeeController: async (req, res) => {
        try {
            let result = await employeeService.findAllService()
            if (result) {
                return sendRsp(res, 200, result.message, result.data);
            }
        } catch (error) {
            return sendRsp(res, 500, staticMsg.employee[500], error.message)
        }
    },
    findEmployeeByIdController: async (req, res) => {
        try {
            let result = await employeeService.findByIdService(req.params);
            if (result) {
                return sendRsp(res, 200, result.message, result.data);
            }
        } catch (error) {
            return sendRsp(res, 500, staticMsg.employee[500], error.message)
        }
    },

    saveEmployeeController: async (req, res) => {
        try {
            let result = await employeeService.saveService(req.body);
            if (result) {
                return sendRsp(res, 200, result.message, result.data);
            }
        } catch (error) {
            return sendRsp(res, 500, staticMsg.employee[500], error.message)
        }
    },
    updateEmployeeController:async(req,res)=>{
        try {
            let result = await employeeService.updateService(req);
            if (result) {
                return sendRsp(res, 200, result.message, result.data);
            }
        } catch (error) {
            return sendRsp(res, 500,  staticMsg.employee[500], error.message)
        }
    },
    deleteEmployeeController:async(req,res)=>{
        try {
            let result = await employeeService.deleteService(req);
            if (result) {
                return sendRsp(res, 200, result.message, result.data);
            }
        } catch (error) {
            return sendRsp(res, 500,  staticMsg.employee[500], error.message)
        }
    }
}

module.exports = { employeeController }