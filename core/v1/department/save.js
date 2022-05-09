const deptModel = require('../../../models/department');

class Save {
    save(params) {
        return new Promise((resolve, reject) => {
            deptModel.insertMany({
                department_id:params.department_id,
                department_name:params.department_name
            }).then((response) => {
                resolve(response);
            }).catch((err) => {
                reject(err);
            });
        });
    }
}

module.exports = {
    SaveClass: Save,
};
