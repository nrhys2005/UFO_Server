const models = require('../../database')
const fs = require('fs');
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

exports.get_all_store = (req, res) => {
    models.Store.findAll({
        where:{
            festival_id: req.params.id
        },
    }).then((result) => {
        var data = JSON.parse(JSON.stringify(result));
        res.json(data);
    }).catch((err) => {
        console.log(err);
        res.json({ "result": "fail" });
    });
};

exports.get_storeby_id = (req, res) => {

    models.Store.findOne({
        where: {
            id: req.params.store_id
        },
    }).then((result) => {
        var data = JSON.parse(JSON.stringify(result));
        res.json(data);
    }).catch((err) => {
        console.log(err);
        res.json({ "result": "fail" });
    })
};

exports.regist_store = (req, res) => {
    
    let file = req.file

    models.Store.create({
        name: req.body.name,
        img_url: file.key,
        desc: req.body.desc,
        start_time: req.body.start_time,
        end_time: req.body.end_time,
        latitude: req.body.latitude,
        longitude: req.body.longitude,
        festival_id: req.params.id,
    }).then((result) => {
        console.log(result);
        res.send(true);
    }).catch((err) => {
        console.log(err);
        res.send(false);
    });
};

exports.update_store = (req, res) => {

    let file = req.file

    models.Store.update({
        name: req.body.name,
        img_url: file.key,
        desc: req.body.desc,
        start_time: req.body.start_time,
        end_time: req.body.end_time,
        latitude: req.body.latitude,
        longitude: req.body.longitude,
        festival_id: req.params.festival_id,
    },{
        where:{
            id: req.params.store_id,
        }
    }).then((result) => {
        var data = JSON.parse(JSON.stringify(result));
        res.status(200).json(data);
    }).catch((err) => {
        console.log(err);
        res.status(500).json({ "result": "fail" });
    });
};


exports.delete_store = (req, res) => {
    models.Store.destroy({
        where: {
            festival_id: req.params.festival_id,
            id: req.params.store_id,
        }
    }).then((result) => {
        var data = JSON.parse(JSON.stringify(result));
        res.status(200).json(data);
    }).catch(() => {
        res.status(500).json({ "result": "fail" });
    });
}