//简化版配置关系依赖，可以指定压缩关系，
//1.未写入压缩关系的js将会自动合并的以page名称命名的js文件中
//2.未写压缩关系的页面将只产生一个js文件
//3.压缩不会考虑重复引用，js文件内的依赖将不会被考虑
//4.压缩关系只能以英文字母开头
module.exports = {
	combine : {
		'mo':['mo-core','mo-xpost','mo-dialog' ,'jquery'],
		'abc':['c','b','c', 'diloag'],
		'xyz':['dialog-login', 'com:header'],
		'dialog':['dialog']

	},
	page : {
		font: ['dialog'],
		login:['abc']
	}
}