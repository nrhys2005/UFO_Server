const express = require('express');
const router = express.Router();
const user = require('../src/user')

module.exports = router

router.post('/signin', user.signin)
router.post('/signup', user.signup)
router.get('/signup/check/:id', user.check)

