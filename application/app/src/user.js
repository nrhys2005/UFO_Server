const bcrypt = require('bcrypt');
const models = require('../../database')
const saltRounds = 12
//유저 확인
exports.login = (req, res) => {
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
            kakao_id : req.body.kakao_id    
        }
    }).then((result) => {
        console.log('login : ' + kakao_id);
        res.send(true);
    }).catch((err) => {
        console.log(err);
        res.send(false);
    });
}
//유저등록(미완)
exports.signup = (req, res) => {
    //cutomer
    var customer_id = "custmer"  //customer_id 안겹치는 문자열로 넣어야함.
    models.User.create({
        kakao_id: req.body.kakao_id,
        customer_id: customer_id
    }).then((result) => {
        console.log(result);
        res.send(true);
    }).catch((error) => {
        console.log(error);
        res.send(false);
    });
}
//결제pw 등록(미완)
exports.update_transaction_pw = (req, res) => {
    bcrypt.genSalt(saltRounds, function(err, salt) {
        if(err) return res.send(false)
        bcrypt.hash(req.body.pw, salt, function(err, hash) {
            // Store hash in your password DB.
            if(err) return res.send(false);
            models.User.update({
                pw : hash
            },{
                where: { kakao_id: req.body.kakao_id } 
            }).then((result) => {
                console.log(result);
                res.send(true);
            }).catch((error) => {
                console.log(error);
                res.send(false);
            });
        });
    });  
}
//결제pw 확인(미완)
exports.check_transaction_pw = (req, res) => {
    models.User.findOne({
        attributes: ['pw']
    },{
        where: {
            kakao_id : req.body.kakao_id    
        }
    }).then((result) => {
        bcrpt.compare(req.pw,result.pw)
        .then(result => {
            if(result) res.send(true)
            else res.send(false)
        })
    }).catch((err) => {
        console.log(err);
        res.send(false);
    });
}

//sales 인증(미완)
exports.regist_sales = (req, res) => {
    var sales_id = "sales"  //customer_id 안겹치는 문자열로 넣어야함.
    models.User.update({
        sales_id : sales_id
    },{
        where: { kakao_id: req.body.kakao_id }
    }).then((result) => {
        console.log(result);
        res.send(true);
    }).catch((error) => {
        console.log(error);
        res.send(false);    
    });
}
//회원탈퇴
exports.sigonut = (req, res) => {
    models.User.destroy({
        where: { kakao_id : kakao_id }
    }).then((result) => {
        console.log(result);
        res.send(true);
    }).catch((error) => {
        console.log(error);
        res.send(false);    
    });
}

//check 현재는 안씀
/*
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
*/