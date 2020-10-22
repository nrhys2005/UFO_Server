const express = require('express');
const router = express.Router();
const models = require('../../models');
var multer = require('multer');

// multer setting
const upload = multer({
    storage: multer.diskStorage({
      // set a localstorage destination
      destination: (req, file, cb) => {
        cb(null, '../../img_store/');
      },
      // file name 중복을 피하기위해 date() 추가.
      filename: (req, file, cb) => {
        // cb(null, new Date().valueOf() + path.extname(file.originalname));
        cb(null, file.originalname);
      },
    }),
  });

const fs = require('fs');
//store regist
router.post('/', (req, res) =>{
    image_path = "./img_store"+req.body.name
    models.Store.create({
        name : req.body.name,
        desc: req.body.desc,
        latitude : req.body.latitude,
        longitude: req.body.longitude
    }).then((result) => {
        fs.mkdirSync(image_path, { recursive: true })
        
        console.log(result);
        upload.single('image');
        res.send(true);
    }).catch((err)=>{
        console.log(err);
        res.send(false); 
    });
});


module.exports = router;