var express = require('express');
var router = express.Router();

/* GET home page. */
const todoCantrollet=require('../controller/ToDoController')

router.get('/',todoCantrollet.getTask)

router.post('/addtask',todoCantrollet.addtask)

router.get('/delete/:id',todoCantrollet.deletetask)

router.get('/perDelete/:id',todoCantrollet.perdelete)

router.get('/complated/:id',todoCantrollet.complatetask)
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

module.exports = router;
