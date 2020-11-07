const crypto = require('crypto');
const models = require('../../database')

exports.signin = (req, res) => {
    /*
    id = req.body.id
    admin = req.body.admin
    org = req.body.org
    user = [id, org, admin]
    //args = [id, admin, org]
     sdk.send(true, user, '', args, true, res)
    //sdk.main(args, res)
    */
    models.User.findOne({
        where: {
            email : req.body.email,
            pw : req.body.pw
        }
    }).then((result) => {
        console.log(result);
        res.send(true);
    }).catch((err) => {
        console.log(err);
        res.send(false);
    });
}

exports.signup = (req, res) => {
    models.User.create({
        email: req.body.email,
        pw: req.body.pw,
        name: req.body.name
    }).then((result) => {
        console.log(result);
        res.send(true);
    }).catch((error) => {
        console.log(error);
        res.send(false);
    });
}

exports.check = (req, res) => {
    models.User.findOne({
        where: { email: req.params.email }
    }).then((result) => {
        console.log(result);
        res.send(true);
    }).catch((error) => {
        console.log(error);
        res.send(false);
    });
}