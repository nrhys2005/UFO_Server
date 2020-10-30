const express = require('express');
const router = express.Router();
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart();
var multer = require('multer');

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

var store = require('../../src/store/store.js');

//store regist
router.post('/regist_store',multipartMiddleware, (req, res) =>{
    store.regist_store(req,res);
});

// image upload
router.post('/img',upload.single("image"), (req,res)=>{
  //
});


//storemenu regist
router.post('/regist_menu', (req, res) =>{
    store.regist_menu(req,res);
});

//get store
router.get('/get_store', (req, res) =>{
    store.get_store(req,res);
});




module.exports = router;