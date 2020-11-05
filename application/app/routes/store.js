const express = require('express');
const router = express.Router();
const store = require('../src/store')
const upload = store.upload_module

module.exports = router

// router.post('/regist_store', multipartMiddleware, store.regist_store)
router.get('/get_store', store.get_store)
router.post('/img', upload.array("image"), (req, res) => {

    let files = req.files
    
    files.forEach(file => {
        console.log(file.originalname)
        console.log(file.key)
    })

    res.send()
})