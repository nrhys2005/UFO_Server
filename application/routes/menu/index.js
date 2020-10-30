const express = require('express');
const router = express.Router();

var menu = require('../../src/menu/menu.js');

router.get('/get_menus', (req, res) =>{
    menu.get_menus(req,res);
});

module.exports = router;