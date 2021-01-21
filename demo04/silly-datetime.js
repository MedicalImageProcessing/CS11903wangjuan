/*
    1、http://www.npmjs.com/package/sillyy-datetime
    2、npm i silly-datetime (--save)
    3、var sd=require('silly-datetime');
*/

var sd=require('silly-datetime');
var d=sd.format(new Date(),'YYYY-MM-DD HH:mm');

console.log(d);