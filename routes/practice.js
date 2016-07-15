/**
 * @html:practice
 */
var router = require('express').Router(); // 新建一个 router
router.get('/practice', function(req, res) {
    res.render('practice', {
        title:'练习'
    }, function(err, html){
        res.set('Content-Type', 'text/html');
        res.end(html)
    });
});

module.exports = router