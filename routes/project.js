/**
 * @html:project
 */
var router = require('express').Router(); // 新建一个 router
router.get('/project', function(req, res) {
    res.render('project', {
        title:'项目',
        nojs:true
    }, function(err, html){
        res.set('Content-Type', 'text/html');
        res.end(html)
    });
});

module.exports = router