const deptModel = require("../../../models/department");

class Find {
  findAll() {
    return new Promise((resolve, reject) => {
      deptModel.find({status : true})
        .sort({ _id: -1 })
        .then((response) => {
          resolve(response);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  findById(params) {
    return new Promise((resolve, reject) => {
      deptModel.findOne({
        _id: params.id,
      })
        .then((response) => {
          resolve(response);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
}

module.exports = {
  FindClass: Find,
};
