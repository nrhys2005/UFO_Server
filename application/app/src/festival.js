const models = require('../../database')

exports.get_all_festival = (req, res) => {
    models.Festival.findAll({
        attributes: ['id','name'],
    }).then((result) => {
        var data = JSON.parse(JSON.stringify(result));
        res.status(200).json(data);
    }).catch((err) => {
        console.log(err);
        res.status(500).json({ "result": "fail" });
    });
};

exports.get_festival_by_id = (req, res) => {
    models.Festival.findAll({
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

exports.regist_festival = (req, res) => {
    models.Festival.create({
        name: req.body.name,
        img_url: req.body.img_url,
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
    models.Festival.update({
        name: req.body.name,
        img_url: req.body.img_url,
        start_time: req.body.start_time,
        end_time: req.body.end_time,
        latitude: req.body.latitude,
        longitude: req.body.longitude,
        desc: req.body.desc,
        where: {
            id: req.body.id
        }
    }).then((result) => {
        var data = JSON.parse(JSON.stringify(result));
        res.status(200).json(data);
    }).catch((err) => {
        console.log(err);
        res.status(500).json({ "result": "fail" });
    });
};

exports.delete_festival = (req, res) => {
    models.Festival.destroy({
        where:{
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