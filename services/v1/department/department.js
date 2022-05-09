const res = require('express/lib/response');
const FIND = require('../../../core/v1/department/find');
const SAVE = require('../../../core/v1/department/save');
const staticMsg = require('../../../helpers/staticValues.json')
const UPDATE = require('../../../core/v1/department/update');

const { findAll, findById } = new FIND.FindClass();
const { save } = new SAVE.SaveClass();

const { update , updateStatus } = new UPDATE.UpdateClass();

async function findAllService(params) {
    try {
        let finalResponse = {}
        const findAllData = await findAll(params);
        if (findAllData && findAllData.length > 0) {
            return finalResponse = { data: findAllData, message: staticMsg.department.find[200] }
        } else {
            return finalResponse = { data: [], message: staticMsg.department.find[404] }
        }
    } catch (error) {
        console.error('ERROR : service || v1 || department || findAllService() : ', error);
        throw error;
    }
}

async function findByIdService(params) {
    try {
        let finalResponse = {}
        const departmentById = await findById(params);
        if (departmentById) {
            if (departmentById.status === true) {
                return finalResponse = { data: departmentById, message: staticMsg.department.findById[200] }
            } else {
                return finalResponse = { data: [], message: staticMsg.department.findById[201] }
            }
        } else {
            return finalResponse = { data: [], message: staticMsg.department.findById[404] }
        }
    } catch (error) {
        console.error('ERROR : service || v1 || department || findByIdService() : ', error);
        throw error;
    }
}

async function saveService(params) {
    try {
        let finalReponse = {}
        const insertData = await save(params);
        finalReponse = {
            data: insertData,
            message: staticMsg.department.insert[200]
        }
        return finalReponse
    } catch (error) {
        console.error('ERROR : service || v1 || department || saveService() : ', error);
        throw error;
    }
}

async function updateService(params) {
    try {
        let finalReponse = {}
        const updatedepartmentResponse = await update(params);
        if (updatedepartmentResponse) {
            finalReponse = {
                data: updatedepartmentResponse,
                message: staticMsg.department.update[200]
            }
        } else {
            finalReponse = {
                data: updatedepartmentResponse,
                message: staticMsg.department.update[404]
            }
        }
        return finalReponse
    } catch (error) {
        console.error('ERROR : service || v1 || department || updateService() : ', error);
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
                message: staticMsg.department.delete[200]
            }
        } else {
            finalReponse = {
                data: deleteResponse,
                message: staticMsg.department.delete[404]
            }
        }
        return finalReponse
    } catch (error) {
        console.error('ERROR : service || v1 || department || deleteService() : ', error);
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
