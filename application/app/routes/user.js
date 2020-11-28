const express = require('express');
const router = express.Router();
const user = require('../src/user')

module.exports = router

router.post('/login', user.login)
router.post('/signup', user.signup)
router.put('/update_transaction_pw', user.update_transaction_pw)
router.post('/check_transaction_pw', user.check_transaction_pw)
router.post('/regist_sales', user.regist_sales)
router.delete('/sigonut', user.sigonut)
//router.get('/signup/check/:id', user.check)

