/**
 * @html:letvstore
 */
var router = require('express').Router(); // 新建一个 router
router.get('/letvstore', function(req, res) {
    res.render('letvstore', {
        title:'乐视tv商城',
        preName:'Letv GameCenter',
        preUrl:'letvgc',
        nextName:'Weather',
        nextUrl:'weather'
    }, function(err, html){
        res.set('Content-Type', 'text/html');
        res.end(html)
    });
});

module.exports = router