// 静态资源服务器配置
module.exports = {
    // debug: true,
    // 站点根目录
    port: 3200,
    root: require('path').join(__dirname, '..'),
    //静态资源cdn地址，默认为本机
    //cdn: 'http://127.0.0.1:3104/',
    // 页面存储路径
    // page: require('path').join(__dirname, '..', 'tpls'),
    // 自定发布目录
    // release: require('path').join(__dirname, '..', 'build'),
    // JS文件后缀名，默认为js
    // jsExt:'js',
    // CSS文件后缀名
    // cssExt:'less',
    // htmlExt : 'html',
    // JS 相关配置
    // 静态资源在服务器分配的目录
    //cdnPrefix: '/astro',
    // 打开图片、字体资源MD5
    imgMd5 : true,
    // 引用的插件，根据书写顺序加载
    middlewares: [
        'astros-asset-parse',
        'astros-resource-refer',
        'astros-2ximg',
        'astros-webcom-refer',
        'astros-cmd-dep',
        'astros-cmd-read',
        'astros-js-dep',
        'astros-asset-dep-parse',
        'astros-asset-for-dep',
        {
            name: 'astros-js-process',
            config: {
                ignore_require: ['jquery']
            }
        },
        'astros-cmd-define',
        {
            name: 'astros-js-tpl',
            config:{
                tpl: '$tpl({name},{file},{content})'
            }
        },
        'astros-svgfont',
        // 压缩JS
        // 'astros-js-minify',
        'astros-css-less2',
        'astros-css-sprite'
    ]
}

