var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    console.log(req.cookies);
    if (req.cookies.token === '111222333') {
        res.clearCookie('token');
    }
    res.render('index', {title: 'Express'});
});

module.exports = router;
