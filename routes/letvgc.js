/**
 * @html:letvgc
 */
var router = require('express').Router(); // 新建一个 router
router.get('/letvgc', function(req, res) {
    res.render('letvgc', {
        title:'乐视tv游戏中心',
        preName:'Brand',
        preUrl:'brand',
        nextName:'Letv STORE',
        nextUrl:'letvstore'
    }, function(err, html){
        res.set('Content-Type', 'text/html');
        res.end(html)
    });
});

module.exports = router