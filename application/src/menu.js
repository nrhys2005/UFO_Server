const models = require('../database/models')

exports.get_menu = (req, res) => {
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