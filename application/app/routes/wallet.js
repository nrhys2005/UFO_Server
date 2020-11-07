const express = require('express');
const router = express.Router();
const wallet = require('../src/wallet')

module.exports = router

router.post('/payment ', wallet.chargeMoney )
router.post('/transferMoney ', wallet.transferMoney )
router.post('/getWallet ', wallet.getWallet )