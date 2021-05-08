var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/home', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.send('respond with a resource home');
});

router.get('/login', (req, res, next)=>{
  /**res.render('login', {
    title: 'Signup',
    login: 'login acces'
  });**/
  res.send('dsfsdf');
});

module.exports = router;
