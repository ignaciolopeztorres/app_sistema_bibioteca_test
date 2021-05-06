var express = require('express');
var router = express.Router();

const conexion = require('../core/database/database_conexion');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/index', (req, resp, next)=>{
  conexion.connect(err=>{
    if (err) {
      console.log('error de Conexion con la base de datos: ', err);
        resp.json(err.sqlMessage);
      } else {
        console.log('conectado');
        resp.send('Conectado a la base de datos!!');
      }
    });
});

module.exports = router;
