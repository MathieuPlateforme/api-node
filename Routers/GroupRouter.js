var express = require('express');
var router = express('Router');
var Group = require('../Controllers/GroupController');

router.post('/admin/add/', Group.adminSetGroup);

router.get('/name/', Group.getName)
router.get('/users/:id', Group.getUsers)

router.put('/admin/edit/:id', Group.adminEditGroup)

router.delete('/admin/delete/:id', Group.adminDeleteGroup)

module.exports = router;
