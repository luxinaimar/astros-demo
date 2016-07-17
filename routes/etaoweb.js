/**
 * @html:etaoweb
 */
var router = require('express').Router(); // 新建一个 router
router.get('/etaoweb', function(req, res) {
    res.render('etaoweb', {
        title:'易淘网站',      
        nextName:'Brand',
        nextUrl:'brand',
    }, function(err, html){
        res.set('Content-Type', 'text/html');
        res.end(html)
    });
});

module.exports = router