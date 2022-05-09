const res = require('express/lib/response');
const FIND = require('../../../core/v1/Employee/find');
const SAVE = require('../../../core/v1/Employee/save');
const staticMsg = require('../../../helpers/staticValues.json')
const UPDATE = require('../../../core/v1/Employee/update');

const { findAll, findById } = new FIND.FindClass();
const { save } = new SAVE.SaveClass();

const { update , updateStatus } = new UPDATE.UpdateClass();

async function findAllService(params) {
    try {
        let finalResponse = {}
        const findAllData = await findAll(params);
        if (findAllData && findAllData.length > 0) {
            return finalResponse = { data: findAllData, message: staticMsg.employee.find[200] }
        } else {
            return finalResponse = { data: [], message: staticMsg.employee.find[404] }
        }
    } catch (error) {
        console.error('ERROR : service || v1 || employee || findAllService() : ', error);
        throw error;
    }
}

async function findByIdService(params) {
    try {
        let finalResponse = {}
        const employeeById = await findById(params);
        if (employeeById) {
            if (employeeById.status === true) {
                return finalResponse = { data: employeeById, message: staticMsg.employee.findById[200] }
            } else {
                return finalResponse = { data: [], message: staticMsg.employee.findById[201] }
            }
        } else {
            return finalResponse = { data: [], message: staticMsg.employee.findById[404] }
        }
    } catch (error) {
        console.error('ERROR : service || v1 || employee || findByIdService() : ', error);
        throw error;
    }
}

async function saveService(params) {
    try {
        let finalReponse = {}
        const insertData = await save(params);
        finalReponse = {
            data: insertData,
            message: staticMsg.employee.insert[200]
        }
        return finalReponse
    } catch (error) {
        console.error('ERROR : service || v1 || employee || saveService() : ', error);
        throw error;
    }
}

async function updateService(params) {
    try {
        let finalReponse = {}
        const updateEmployeeResponse = await update(params);
        if (updateEmployeeResponse) {
            finalReponse = {
                data: updateEmployeeResponse,
                message: staticMsg.employee.update[200]
            }
        } else {
            finalReponse = {
                data: updateEmployeeResponse,
                message: staticMsg.employee.update[404]
            }
        }
        return finalReponse
    } catch (error) {
        console.error('ERROR : service || v1 || employee || updateService() : ', error);
        throw error;
    }
}

async function deleteService(params) {
    try {
        let finalReponse = {}
        const deleteResponse = await updateStatus(params);
        if (deleteResponse) {
            finalReponse = {
                data: deleteResponse,
                message: staticMsg.employee.delete[200]
            }
        } else {
            finalReponse = {
                data: deleteResponse,
                message: staticMsg.employee.delete[404]
            }
        }
        return finalReponse
    } catch (error) {
        console.error('ERROR : service || v1 || employee || deleteService() : ', error);
        throw error;
    }
}

module.exports = {
    findAllService,
    findByIdService,
    saveService,
    updateService,
    deleteService,
};
