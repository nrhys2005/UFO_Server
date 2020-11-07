const models = require('../../database')
const path = require('path')

var sdk = require('./sdk');

//app.post('/api/chargeMoney', (req, res) => {
exports.chargeMoney  = (req, res) => {
    id = req.body.id
    org = req.body.org
    amount = req.body.amount

    user = [id, org]
    args = [id, amount]

    sdk.send(true, user, 'chargeMoney', args, false, res)
}


exports.transferMoney  = (req, res) => {
    sender = req.body.sender
    receiver = req.body.receiver
    amount = req.body.amount
    org = req.body.org

    user = [sender, org]
    args = [sender, receiver, amount]

    sdk.send(true, user, 'transferMoney', args, false, res)
}

exports.getWallet  = (req, res) => {
    id = req.body.id
    org = req.body.org

    user = [id, org]
    args = [id]

    sdk.send(false, user, 'getWallet', args, false, res)
}