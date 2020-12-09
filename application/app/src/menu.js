const models = require('../../database')
const multer = require('multer')
const multerS3 = require('multer-s3')
const AWS = require('./aws')
const config = require('../../bin/config').aws.development

exports.upload_module = multer({
  storage: multerS3({
      s3: AWS.s3,
      bucket: config.bucket,
      key: (req, file, cb) => {
          cb(null, Math.floor(Math.random() * 1000).toString() + Date.now().toString())
      }
  })
})

exports.get_menu = (req, res) => {
  models.Menu.findAll({
    where: {
      // festival_id: req.params.festival_id,
      store_id: req.params.store_id
    }
  }).then((result) => {
    var data = JSON.parse(JSON.stringify(result));
    res.status(200).json(data);
  }).catch((err) => {
    console.log(err);
    res.status(500).json({ "result": "fail" });
  });
};



exports.regist_menu = (req, res) => {
  
  let file = req.file

  // models.Menu.findOne({
  //   where: {
  //     id: req.body.store_id
  //   }
  // }).then((result) => {
  //   image_path = "./img_store" + result.name + "/" + req.body.name
  // }).catch(() => {
  //   res.json({ "result": 'fail' });
  // });
  models.Menu.create({
    store_id: req.params.store_id,
    name: req.body.name,
    img_url: file.key,
    price: req.body.price
  }).then(() => {
    res.send(true);
  }).catch(() => {
    res.send(false);
  });
};

exports.update_menu = (req, res) => {

  let file = req.file

  models.Menu.update({
    name: req.body.name,
    price: req.body.price,
    img_url: file.key,
  },{
    where: {
      // festival_id: req.params.festival_id,
      store_id: req.params.store_id
    }
  }
  ).then((result) => {
    var data = JSON.parse(JSON.stringify(result));
    res.status(200).json(data);
  }).catch((err) => {
    console.log(err);
    res.status(500).json({ "result": "fail" });
  });
};

exports.delete_menu = (req, res) => {
  models.Menu.delete({
    where: {
      id: req.params.menu_id,
      store_id: req.params.store_id,
    }
  }).then((result) => {
    var data = JSON.parse(JSON.stringify(result));
    res.status(200).json(data);
  }).catch((err) => {
    console.log(err);
    res.status(500).json({ "result": "fail" });
  });
};