/**
 * @html:weather
 */
var router = require('express').Router(); // 新建一个 router
router.get('/weather', function(req, res) {
    res.render('weather', {
        title:'网聚天气APP',
        preName:'乐视应用商店',
        preUrl:'letvstore'
    }, function(err, html){
        res.set('Content-Type', 'text/html');
        res.end(html)
    });
});

module.exports = router