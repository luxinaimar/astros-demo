/**
 * @html:about
 */
var router = require('express').Router(); // 新建一个 router
router.get('/about', function(req, res) {
    res.render('about', {
        title:'关于',
        nojs:true
    }, function(err, html){
        res.set('Content-Type', 'text/html');
        res.end(html)
    });
});

module.exports = router