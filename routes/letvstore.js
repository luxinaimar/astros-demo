/**
 * @html:letvstore
 */
var router = require('express').Router(); // 新建一个 router
router.get('/letvstore', function(req, res) {
    res.render('letvstore', {
        title:'乐视应用商店',
        preName:'乐视游戏中心',
        preUrl:'letvgc',
        nextName:'网聚天气APP',
        nextUrl:'weather'
    }, function(err, html){
        res.set('Content-Type', 'text/html');
        res.end(html)
    });
});

module.exports = router