/**
 * @html:weather
 */
var router = require('express').Router(); // 新建一个 router
router.get('/weather', function(req, res) {
    res.render('weather', {
        title:'聚网天气',
        preName:'leTV',
        preUrl:'letv',
        nextName:'weather',
        nextUrl:'weather'
    }, function(err, html){
        res.set('Content-Type', 'text/html');
        res.end(html)
    });
});

module.exports = router