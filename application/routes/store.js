const express = require('express');
const router = express.Router();
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart();
var multer = require('multer');
const store = require('../src/store')

module.exports = router

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

router.post('/regist_store', multipartMiddleware, store.regist_store)
// router.post('/img', upload.single("image"), store.)
router.post('/regist_menu', store.regist_menu)
router.get('/get_store', store.get_store)