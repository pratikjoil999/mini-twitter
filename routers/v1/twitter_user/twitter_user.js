const router = require('express').Router();
var { twitterUserController } = require('../../../controllers/v1/twitter_user/twitter_user');
const tokenCheck = require('../../../middleware/joi_validation/tokenCheck')
/* 
const insertEmployeeJoi = require('../../../middleware/joi_validation/employeeJoi')

router.get('/getEmployee', employeeController.findAllEmployeeController);
router.get('/getEmployee/:id',objectIdJoiValidation ,employeeController.findEmployeeByIdController);
router.post('/addEmployee', insertEmployeeJoi ,employeeController.saveEmployeeController);
router.put('/updateEmployee/:id',objectIdJoiValidation,insertEmployeeJoi,employeeController.updateEmployeeController)
router.put('/deleteEmployee/:id',objectIdJoiValidation,employeeController.deleteEmployeeController)
 */

router.post('/addEmployee' ,twitterUserController.saveTwitterUserController);
router.post('/login', twitterUserController.loginTwitterUserController);
router.get('/getUser/:id',tokenCheck, twitterUserController.findUserByIdController);
router.get('/searchUser/:name', tokenCheck, twitterUserController.findUserByNameController);
router.post('/follow' ,tokenCheck,twitterUserController.followTwitterUserController);
router.get('/findMultipleUser' ,tokenCheck,twitterUserController.findMultipleUserTwitterController);
module.exports = router
