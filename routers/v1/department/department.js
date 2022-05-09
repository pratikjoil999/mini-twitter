const router = require('express').Router();
var { departmentController } = require('../../../controllers/v1/department/department');
const insertDepartmentJoi = require('../../../middleware/joi_validation/departmentValidation')
const departmentIdValidation = require('../../../middleware/joi_validation/ObjectIdValidation')

router.get('/getDepartment', departmentController.findAlldepartmentController);
router.get('/getDepartment/:id',departmentIdValidation ,departmentController.findDepartmentByIdController);
router.post('/addDepartment', insertDepartmentJoi ,departmentController.saveDepartmentController);
router.put('/updateDepartment/:id',departmentIdValidation,insertDepartmentJoi,departmentController.updateDepartmentController)
router.put('/deleteDepartment/:id',departmentIdValidation,departmentController.deleteDepartmentController)

module.exports = router
