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

exports.get_all_festival = (req, res) => {
    models.Festival.findAll({
        attributes: ['id', 'name'],
    }).then((result) => {
        var data = JSON.parse(JSON.stringify(result));
        // res.status(200).json(data);
        res.json(data)
    }).catch((err) => {
        console.log(err);
        // res.status(500).json({ "result": "fail" });
        res.json({ "result": "fail" })
    });
};

exports.get_festival_by_id = (req, res) => {
    models.Festival.findOne({
        where: {
            id: req.params.id
        }
    }).then((result) => {     
        var data = JSON.parse(JSON.stringify(result));

        // data = JSON.parse(JSON.stringify(data));        
        res.json(data);
    }).catch((err) => {
        console.log(err);
        res.json({ "result": "fail" });
    });
};

exports.regist_festival = (req, res) => {

    let file = req.file

    models.Festival.create({

        name: req.body.name,
        img_url: file.key,
        start_time: req.body.start_time,
        end_time: req.body.end_time,
        latitude: req.body.latitude,
        longitude: req.body.longitude,
        desc: req.body.desc

    }).then((result) => {

        var data = JSON.parse(JSON.stringify(result));
        res.status(200).json(data);
    }).catch((err) => {

        console.log(err);
        res.status(500).json({ "result": "fail" });
    });
};

exports.update_festival = (req, res) => {

    let file = req.file

    models.Festival.update({
        name: req.body.name,
        img_url: file.key,
        start_time: req.body.start_time,
        end_time: req.body.end_time,
        latitude: req.body.latitude,
        longitude: req.body.longitude,
        desc: req.body.desc,
    }, {
        where: {
            id: req.body.id
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

exports.delete_festival = (req, res) => {
    models.Festival.destroy({
        where: {
            id: req.params.id
        }
    }).then((result) => {
        var data = JSON.parse(JSON.stringify(result));
        res.status(200).json(data);
    }).catch((err) => {
        console.log(err);
        res.status(500).json({ "result": "fail" });
    });
};