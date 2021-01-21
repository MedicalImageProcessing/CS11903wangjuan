//找到模块网站  下载cnpm i mkdikp /npm i mkdirp

const mkdirp = require("mkdirp");

//引用var mkdirp = require('mkdirp');

var mkdirp = require('mkdirp');

mkdirp('./upload',function(err){
    if(err){
        console.error(err);
    }
});
