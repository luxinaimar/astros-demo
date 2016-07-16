/**
 * @html:brand
 */
var router = require('express').Router(); // 新建一个 router
router.get('/brand', function(req, res) {
    res.render('brand', {
        title:'品牌',
        nojs:true,
        preName:'Etao Web&Wap',
        preUrl:'etaoweb',
        nextName:'Letv GameCenter',
        nextUrl:'letvGc'
    }, function(err, html){
        res.set('Content-Type', 'text/html');
        res.end(html)
    });
});

module.exports = router