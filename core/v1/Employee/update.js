const empModel = require('../../../models/employee');

class Update {
    update(req) {
        return new Promise((resolve, reject) => {
            let updateParams = {
                first_name : req.params.first_name,
                last_name: req.params.last_name,
                age:req.params.age,
                department_id:req.params.department_id,
                updated_date:new Date()
            }
            empModel.findOneAndUpdate({
                _id: req.params.id,
            }, updateParams,{new : true}).then((response) => {
                resolve(response);
            }).catch((err) => {
                console.error('ERROR : core || yv1 || employee :: update || Update() : ', err);
                reject(err);
            });
        });
    }
    updateStatus(req){
        return new Promise((resolve, reject) => {
            let updateStatus = {"status" : false}
            empModel.findOneAndUpdate({
                _id: req.params.id,
            }, updateStatus,{new : true}).then((response) => {
                resolve(response);
            }).catch((err) => {
                console.error('ERROR : core || yv1 || employee :: update || Update() : ', err);
                reject(err);
            });
        });
    }
}

module.exports = {
    UpdateClass: Update,
};
