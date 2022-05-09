const router = require('express').Router();
var { employeeController } = require('../../../controllers/v1/employee/employee');
const insertEmployeeJoi = require('../../../middleware/joi_validation/employeeJoi')
const objectIdJoiValidation = require('../../../middleware/joi_validation/ObjectIdValidation')

router.get('/getEmployee', employeeController.findAllEmployeeController);
router.get('/getEmployee/:id',objectIdJoiValidation ,employeeController.findEmployeeByIdController);
router.post('/addEmployee', insertEmployeeJoi ,employeeController.saveEmployeeController);
router.put('/updateEmployee/:id',objectIdJoiValidation,insertEmployeeJoi,employeeController.updateEmployeeController)
router.put('/deleteEmployee/:id',objectIdJoiValidation,employeeController.deleteEmployeeController)

module.exports = router
