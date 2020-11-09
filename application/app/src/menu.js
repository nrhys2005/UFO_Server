const models = require('../../database')

exports.get_menu = (req, res) => {
  models.Menu.findAll({
    where: {
      store_id: req.params.id
    }
  }).then((result) => {
    res.json(result);
  }).catch(() => {
    res.json({ "result": "fail" });
  });
}

exports.regist_menu = (req, res) => {
  var image_path = ""
  models.Menu.findOne({
    where: {
      id: req.body.store_id
    }
  }).then((result) => {
    image_path = "./img_store" + result.name + "/" + req.body.name
  }).catch(() => {
    res.json({ "result": 'fail' });
  });
  models.Menu.create({
    store_id: req.body.store_id,
    name: req.body.name,
    img_url: image_path,
    price: req.body.price
  }).then(() => {
    res.send(true);
  }).catch(() => {
    res.send(false);
  });
}