const models = require('../../database')
const fs = require('fs');
const multer = require('multer')
const multerS3 = require('multer-s3')
const AWS = require('./aws')

exports.upload_module = multer({
    storage: multerS3({
        s3: AWS.s3,
        bucket: 'uni-fest-one',
        key: (req, file, cb) => {
            cb(null, Math.floor(Math.random() * 1000).toString() + Date.now().toString())
        }
    })
})

exports.regist_store = (req, res) => {
    var image_url = "img_store/" + req.body.name;
    // image_path = "img_store/"+req.body.name;

    models.Store.create({
        name: req.body.name,
        desc: req.body.desc,
        img_url: image_url + "/" + req.body.name,
        latitude: req.body.latitude,
        longitude: req.body.longitude
    }).then((result) => {
        fs.mkdirSync(image_url, { recursive: true });
        console.log("make dir done");
        console.log(result);
        res.send(true);
    }).catch((err) => {
        console.log(err);
        res.send(false);
    });
}

exports.get_store = (req, res) => {
    models.Menu.findAll({
        where: {
            store_id: req.params.store_id
        }
    }).then((result) => {
        res.json({ "result": "ok", result });
    }).catch(() => {
        res.json({ "result": "fail" });
    });
}