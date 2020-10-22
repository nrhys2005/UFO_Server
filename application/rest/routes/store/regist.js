const express = require('express');
const router = express.Router();
const models = require('../../models');
var multer = require('multer');
const fs = require('fs');
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart();



// multer setting
const upload = multer({
  storage: multer.diskStorage({
    // set a localstorage destination
    destination: (req, file, cb) => {
      cb(null, 'img_store/');
    },
    // file name 중복을 피하기위해 date() 추가.
    filename: (req, file, cb) => {
      // cb(null, new Date().valueOf() + path.extname(file.originalname));
      cb(null, file.originalname);
    },
  }),
});

//store regist
router.post('/',multipartMiddleware, (req, res) =>{
    var fname = req.body.name;
    image_url = "img_store/"+req.body.name+"/"+req.body.name;
    // image_path = "img_store/"+req.body.name;

    models.Store.create({
        name : req.body.name,
        desc: req.body.desc,
        img_url : image_url,
        latitude : req.body.latitude,
        longitude: req.body.longitude
    }).then((result) => {
        fs.mkdirSync(image_url, { recursive: true });
        console.log("make dir done");
        console.log(result);
        res.send(true);
    }).catch((err)=>{
        console.log(err);
        res.send(false); 
    });
});

router.post('/img',upload.single("image"), (req,res)=>{
  //
})

module.exports = router;