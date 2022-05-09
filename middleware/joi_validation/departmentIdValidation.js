const Joi = require('joi')
const sendRsp = require('../../helpers/response').sendRsp;

const departmentSaveValidation = Joi.object({
    department_id: Joi.number().required().min(2)
})

const saveDepartmentValidation = async (req, res, next) => {
    let errors = [];
    try {
        let department_id = req.params.id

        const { error, value } = departmentSaveValidation.validate({ department_id })

        if (error) {
            errors.push(error.message.replace(/['"]+/g, ''))
            throw ({ status_code: 400, message: { errors } })
        } else {
            next()
        }
    } catch (error) {
        return sendRsp(res, error.status_code ? error.status_code : 500, 'Bad Request', error.message);
    }

}

module.exports = saveDepartmentValidation;