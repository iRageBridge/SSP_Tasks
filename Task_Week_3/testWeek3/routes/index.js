var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Input Table' });
});

router.post('/', function(req,res){
  res.redirect('/hello');
  //res.send('Post page');
});

router.get('/hello', function(req,res,next){
  res.render('hello', {title: req.body.input});
});


module.exports = router;
