const empModel = require("../../../models/employee");

class Find {
  findAll() {
    return new Promise((resolve, reject) => {
      empModel.find({}).populate('deptData')
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
      empModel.findOne({
        _id: params.id,
      }).populate('deptData')
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
