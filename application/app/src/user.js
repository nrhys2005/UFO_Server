const bcrypt = require("bcrypt");
const models = require("../../database");
const saltRounds = 12;
//로그인
exports.login = function (req, res) {
  login_id = req.body.kakao_id;
  models.User.findOne({
    where: {
      kakao_id: login_id,
    },
  })
    .then((result) => {
      if (result.length == 0) {
        res.send(false);
      } else {
        console.log("login : " + login_id);
        req.session.kakao_id = login_id;
        res.send(true);
      }
    })
    .catch((err) => { 
      console.log(err);
      res.send(false);
    });
};
//로그아웃
exports.logout = function (req, res) {
    if (req.session.kakao_id) {
        req.session.destroy(function (err) {
            if (err) {
                console.log(err);
                res.send(false);
            } else {
                res.send(true);
            }
        });
    }
    else{
        res.send(false);
    }
};
//세션확인
exports.islogin = (req, res) => {
  //세션값이 있으면
  if (req.session.kakao_id) {
    res.send(true);
  } else {
    //없으면
    res.send(false);
  }
};
//유저등록
exports.signup = (req, res) => {
  var kakao_id = req.body.kakao_id;
  var customer_id = req.body.kakao_id + "_c";
  bcrypt.genSalt(saltRounds, function (err, salt) {
    if (err) return res.send(false);
    bcrypt.hash(customer_id, salt, function (err, hash) {
      if (err) return res.send(false);
      models.User.create({
        kakao_id: kakao_id,
        customer_id: customer_id,
      })
        .then((result) => {
          console.log(result);
          res.send(true);
        })
        .catch((error) => {
          console.log(error);
          res.send(false);
        });
    });
  });
};
//회원탈퇴
exports.sigonut = (req, res) => {
  models.User.destroy({
    where: { kakao_id: req.session.kakao_id },
  })
    .then((result) => {
      console.log(result);
      res.send(true);
    })
    .catch((error) => {
      console.log(error);
      res.send(false);
    });
};

//결제pw 등록
exports.update_transaction_pw = (req, res) => {
  var password = req.body.transaction_pw;
  bcrypt.genSalt(saltRounds, function (err, salt) {
    if (err) return res.send(false);
    bcrypt.hash(password, salt, function (err, hash) {
      if (err) return res.send(false);
      models.User.update(
        {
          transaction_pw: hash,
        },
        {
          where: { kakao_id: req.session.kakao_id },
        }
      )
        .then((result) => {
          console.log(result);
          res.send(true);
        })
        .catch((error) => {
          console.log(error);
          res.send(false);
        });
    });
  });
};
//결제pw 확인(미완)
exports.check_transaction_pw = (req, res) => {
  models.User.findOne({
    where: {
      kakao_id: req.session.kakao_id ,
    },
  })
    .then((result) => {
      bcrypt
        .compare(req.body.transaction_pw, result.transaction_pw)
        .then((result) => {
          if (result) res.send(true);
          else res.send(false);
        });
    })
    .catch((err) => {
      console.log(err);
      res.send(false);
    });
};

//sales 인증(미완)
exports.update_sales = (req, res) => {
  var sales_id =  req.session.kakao_id + "_s";
  bcrypt.genSalt(saltRounds, function (err, salt) {
    if (err) return res.send(false);
    bcrypt.hash(sales_id, salt, function (err, hash) {
      // Store hash in your password DB.
      if (err) return res.send(false);
      models.User.update(
        {
          sales_id: hash,
        },
        {
          where: { kakao_id: req.session.kakao_id },
        }
      )
        .then((result) => {
          console.log(result);
          res.send(true);
        })
        .catch((error) => {
          console.log(error);
          res.send(false);
        });
    });
  });
};