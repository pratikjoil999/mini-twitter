const deptModel = require('../../../models/department');

class Update {
    update(req) {
        let updateParams = {
            department_id:req.body.department_id,
            department_name:req.body.department_name,
            updated_date:new Date
        }
        return new Promise((resolve, reject) => {
            deptModel.findOneAndUpdate({
                _id: req.params.id,
            }, updateParams,{new : true}).then((response) => {
                resolve(response);
            }).catch((err) => {
                reject(err);
            });
        });
    }
    updateStatus(req){
        return new Promise((resolve, reject) => {
            let updateStatus = {"status" : false}
            deptModel.findOneAndUpdate({
                _id: req.params.id,
            }, updateStatus,{new : true}).then((response) => {
                resolve(response);
            }).catch((err) => {
                reject(err);
            });
        });
    }
}

module.exports = {
    UpdateClass: Update,
};
