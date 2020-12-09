const express = require('express');
const router = express.Router();

const festival = require('../src/festival');
const store = require('../src/store');
const menu = require('../src/menu');


// FESTIVAL API
router.get('/', festival.get_all_festival);
router.get('/:id', festival.get_festival_by_id);
router.post('/', festival.upload_module.single('img'), festival.regist_festival);
router.put('/:id', festival.upload_module.single('img'), festival.update_festival);
router.delete('/:id', festival.delete_festival);


// STORE API
router.get('/:id/store', store.get_all_store);
router.get('/:festival_id/store/:store_id', store.get_storeby_id);
router.post('/:id/store', store.upload_module.single('img'), store.regist_store);
router.put('/:festival_id/store/:store_id', festival.upload_module.single('img'), store.update_store);
router.delete('/:festival_id/store/:store_id', store.delete_store);

// MENU API
router.get('/:festival_id/store/:store_id/menu', menu.get_menu);
router.post('/:festival_id/store/:store_id/menu', menu.upload_module.single('img'), menu.regist_menu);
router.put('/:festival_id/store/:store_id/menu/:menu_id', festival.upload_module.single('img'), menu.update_menu);
router.delete('/:festival_id/store/:store_id/menu/:menu_id', menu.delete_menu);



module.exports = router