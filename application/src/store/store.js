const models = require('../DataBase/models');
const fs = require('fs');


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

function regist_store(req, res) {
    var fname = req.body.name;
    image_url = "img_store/"+req.body.name;
    // image_path = "img_store/"+req.body.name;

    models.Store.create({
        name : req.body.name,
        desc: req.body.desc,
        img_url : image_url+"/"+req.body.name,
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
}

function regist_menu(req,res){
    image_path = ""
    models.Menu.findOne({
        where: {
          id: req.body.store_id
        }
    }).then((result) => {
        image_path = "./img_store"+result.name+"/"+req.body.name
    }).catch(()=>{
        res.json({"result" : 'fail'}); 
    });
    models.Menu.create({
        store_id : req.body.store_id,
        name : req.body.name,
        img_url : image_path,
        price: req.body.price
    }).then(() => { 
        res.send(true); 
    }).catch(()=>{
        res.send(false); 
    });
}

function get_store(req,res){
    models.Menu.findAll({
        where: {
          store_id: req.params.store_id
        }
      }).then((result) => { 
        res.json({"result":"ok",result}); 
    }).catch(()=>{
        res.json({"result":"fail"}); 
    });
}


module.exports = {
    regist_store,
    regist_menu,
    get_store
}