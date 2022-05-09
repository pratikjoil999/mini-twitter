const Joi = require("joi");
const sendRsp = require("../../helpers/response").sendRsp;

const employeeSaveValidation = Joi.object({
  first_name: Joi.string().min(10).required(),
  last_name: Joi.string().min(10).required(),
  age: Joi.number().required().min(18),
  department_id: Joi.string(),
});

const saveEmployeeValidation = async (req, res, next) => {
  let errors = [];
  try {
    let first_name = req.body.first_name;
    let last_name = req.body.last_name;
    let age = req.body.age;
    let department_id = req.body.department_id;

    const { error, value } = employeeSaveValidation.validate({
      first_name,
      last_name,
      age,
      department_id,
    });

    if (error) {
      errors.push(error.message.replace(/['"]+/g, ""));
      throw { status_code: 400, message: { errors } };
    } else {
      next();
    }
  } catch (error) {
    return sendRsp(
      res,
      error.status_code ? error.status_code : 500,
      "Bad Request",
      error.message
    );
  }
};

module.exports = saveEmployeeValidation;
