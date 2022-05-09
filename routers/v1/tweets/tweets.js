const router = require('express').Router();
var { tweetsController } = require('../../../controllers/v1/tweets/tweets');
const tokenCheck = require('../../../middleware/joi_validation/tokenCheck')
/* const insertEmployeeJoi = require('../../../middleware/joi_validation/employeeJoi')
const objectIdJoiValidation = require('../../../middleware/joi_validation/ObjectIdValidation')

router.get('/getEmployee', employeeController.findAllEmployeeController);
router.get('/getEmployee/:id',objectIdJoiValidation ,employeeController.findEmployeeByIdController);
router.post('/addEmployee', insertEmployeeJoi ,employeeController.saveEmployeeController);
router.put('/updateEmployee/:id',objectIdJoiValidation,insertEmployeeJoi,employeeController.updateEmployeeController)
router.put('/deleteEmployee/:id',objectIdJoiValidation,employeeController.deleteEmployeeController)
 */

router.post('/tweet' ,tokenCheck,tweetsController.saveTweetsController);
router.post('/tweetFind' ,tokenCheck,tweetsController.findTweetsController);
router.post('/multiTweetFind' ,tokenCheck,tweetsController.multiTweetsController);
module.exports = router
