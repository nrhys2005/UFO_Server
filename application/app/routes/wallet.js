const express = require('express');
const router = express.Router();
const wallet = require('../src/wallet')


router.post('/chargeMoney ', wallet.chargeMoney )
router.post('/transferMoney ', wallet.transferMoney )
router.post('/getWallet ', wallet.getWallet )

module.exports = router