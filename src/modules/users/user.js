const router = require('express').Router()
const {getuaser,postuser} = require('./user.controllar');


//const {getuaser}= require('./user.controller')
router.get('/', getuaser);

router.post('/add', postuser);

 module.exports = router ;