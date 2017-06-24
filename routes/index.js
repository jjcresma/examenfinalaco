var express = require('express');
var router = express.Router();
var notas = {estudiante:'jose calamani', nota:'70' }


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Examen Final',subtitle :'Avances en computacion' , contacto : 'Bienvenidos ',notas :notas});
});

module.exports = router;
