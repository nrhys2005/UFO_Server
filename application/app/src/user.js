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
        console.log('login : ' + req.body.kakao_id);
        res.send(true);
    }).catch((err) => {
        console.log(err);
        res.send(false);
    });
}
//유저등록
exports.signup = (req, res) => {
    var kakao_id = req.body.kakao_id 
    var customer_id = req.body.kakao_id + "_c"
    bcrypt.genSalt(saltRounds, function(err, salt) {
        if(err) return res.send(false)
        bcrypt.hash(customer_id, salt, function(err, hash) {
            if(err) return res.send(false);
            models.User.create({
                kakao_id: kakao_id,
                customer_id: customer_id
            }).then((result) => {
                console.log(result);
                res.send(true);
            }).catch((error) => {
                console.log(error);
                res.send(false);
            });
        });
    });  
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
//결제pw 등록
exports.update_transaction_pw = (req, res) => {
    var password = req.body.transaction_pw
    bcrypt.genSalt(saltRounds, function(err, salt) {
        if(err) return res.send(false)
        bcrypt.hash(password, salt, function(err, hash) {
            if(err) return res.send(false);
            models.User.update({
                transaction_pw : hash},{
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
        where: {
            kakao_id : req.body.kakao_id    
        }
    }).then((result) => {
        bcrypt.compare(req.body.transaction_pw,result.transaction_pw)
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
    var sales_id = req.body.kakao_id + "_s"
    bcrypt.genSalt(saltRounds, function(err, salt) {
        if(err) return res.send(false)
        bcrypt.hash(sales_id, salt, function(err, hash) {
            // Store hash in your password DB.
            if(err) return res.send(false);
            models.User.update({
                sales_id : hash
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
    //var sales_id = "sales"  //customer_id 안겹치는 문자열로 넣어야함.
   
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