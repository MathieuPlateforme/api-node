var express = require('express');
var router = express('Router');
var User = require('../Controllers/UserController');
var middleware = require('../Middlewares/UserMiddleware');


router.post('/create/',middleware.hashPassword, User.setUser) //
router.post('/login/',middleware.comparePassword, User.login) 
router.post('/group/:id', User.setToGroup) //

router.get('/list/', User.getList) //
router.get('/details/:id', User.getDetails) //

router.put('/edit/:id', User.edit) //
router.put('/admin/edit/:id', User.adminEdit) //
router.put('/admin/group/:id', User.adminSetToGroup) // 

router.delete('/admin/delete/:id', User.adminDelete) //

module.exports = router;