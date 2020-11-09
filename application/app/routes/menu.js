const express = require('express');
const router = express.Router();
const menu = require('../src/menu')

module.exports = router

router.get('/get/:id', menu.get_menu)
router.post('/regist', menu.regist_menu)
