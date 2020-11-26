const express = require('express');
const router = express.Router();

const festival = require('../src/festival');
const store = require('../src/store');
const menu = require('../src/menu');


// FESTIVAL API
router.get('/', festival.get_all_festival);
router.get('/:id', festival.get_festival_by_id);
router.post('/', festival.regist_festival);
router.put('/:id', festival.update_festival);
router.delete('/:id', festival.delete_festival);


// STORE API
router.get('/:id/store', store.get_store);
router.post('/:id/store', store.regist_store);
router.put('/:festival_id/store/:store_id', store.update_store);
router.delete('/:festival_id/store/:store_id', store.delete_store);
router.post('/:festival_id/store/:store_id/img', store.upload_module.array("image"), (req, res) => {
    let files = req.files
    files.forEach(file => {
        console.log(file.originalname);
        console.log(file.key);
    });
    res.send();
});


// MENU API
router.get('/:festival_id/store/:store_id/menu', menu.get_menu);
router.post('/:festival_id/store/:store_id/menu', menu.regist_menu);
router.put('/:festival_id/store/:store_id/menu/:menu_id', menu.update_menu);
router.delete('/:festival_id/store/:store_id/menu/:menu_id', menu.delete_menu);



module.exports = router