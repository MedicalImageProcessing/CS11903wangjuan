//对123456进行加密
/*
    1、在网站http://www.npmjs.com/package/md5 
        找到md5安装方式
    2、在项目对应的地方（cmd）安装md5模块
        npm install md5（--save）
    3、引用md5模块
*/


//实现md5加密功能
var md5=require('md5');

console.log(md5('123456'));