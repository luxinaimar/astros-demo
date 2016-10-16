/**
 * @html:brand
 */
var router = require('express').Router(); // 新建一个 router
router.get('/brand', function(req, res) {
    res.render('brand', {
        title:'易淘企业形象',
        nojs:true,
        preName:'易淘web&wap',
        preUrl:'etaoweb',
        nextName:'乐视游戏中心',
        nextUrl:'letvgc'
    }, function(err, html){
        res.set('Content-Type', 'text/html');
        res.end(html)
    });
});

module.exports = router