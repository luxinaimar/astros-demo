/**
 * @html:letvgc
 */
var router = require('express').Router(); // 新建一个 router
router.get('/letvgc', function(req, res) {
    res.render('letvgc', {
        title:'乐视游戏中心',
        preName:'易淘企业形象',
        preUrl:'brand',
        nextName:'乐视应用商店',
        nextUrl:'letvstore'
    }, function(err, html){
        res.set('Content-Type', 'text/html');
        res.end(html)
    });
});

module.exports = router