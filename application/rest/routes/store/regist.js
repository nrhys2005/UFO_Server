const express = require('express');
const router = express.Router();
const models = require('../../models');
var multer = require('multer');
const fs = require('fs');



//store regist
router.post('/', (req, res) =>{
    image_path = "img_store/"+req.body.name+"/"+req.body.name

    // multer setting
    const upload = multer({
      storage: multer.diskStorage({
        // set a localstorage destination
        destination: (cb) => {
          cb(null, image_path);
        },
        // file name 중복을 피하기위해 date() 추가.
        filename: (file, cb) => {
          // cb(null, new Date().valueOf() + path.extname(file.originalname));
          cb(null, req.body.name);
        },
      }),
    });
    
    models.Store.create({
        name : req.body.name,
        desc: req.body.desc,
        img_url : image_path,
        latitude : req.body.latitude,
        longitude: req.body.longitude
    }).then((result) => {
        fs.mkdirSync(image_path, { recursive: true });
        upload.single('image');
        console.log(result);
        res.send(true);
    }).catch((err)=>{
        console.log(err);
        res.send(false); 
    });
});


module.exports = router;