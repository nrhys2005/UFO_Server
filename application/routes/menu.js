const express = require('express');
const router = express.Router();
const menu = require('../src/menu')

module.exports = router

router.get('/get_menus', menu.get_menu)

