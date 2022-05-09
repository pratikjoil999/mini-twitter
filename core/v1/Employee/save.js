const empModel = require('../../../models/employee');

class Save {
    save(params) {
        return new Promise((resolve, reject) => {
            empModel.insertMany({
                first_name : params.first_name,
                last_name: params.last_name,
                age:params.age,
                department_id:params.department_id
            }).then((response) => {
                resolve(response);
            }).catch((err) => {
                console.error('ERROR : core || v1 || employee || save() : ', err);
                reject(err);
            });
        });
    }
}

module.exports = {
    SaveClass: Save,
};
