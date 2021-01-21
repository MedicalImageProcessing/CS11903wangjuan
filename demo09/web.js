const http=require('http');
const fs=require('fs');
const common=require('./module/common.js');
const path=require('path');
const url=require('url');

http.createServer(function(req,res){

    //获取网站传过来的地址
    console.log(req.url);

    let pathname=url.parse(req.url).pathname;
    pathname=pathname=='/'?'/index.html':pathname;
    //获取后缀名path.extname
    let extname=path.extname(pathname);

    //通过fs模块读取文件
    if(pathname!='./favicon.ico'){
        fs.readFile('./static'+pathname,(err,data)=>{
            if(err){
                res.writeHead(404,{'Content-Type':'text/html;charset="utf-8"'});
                res.end('404 这个页面不存在！');
            }
            let mime=common.getMine(extname);
            res.writeHead(200,{'Content-Type':''+mime+';charset="utf-8"'});
            res.end(data);
        })
    }

}).listen(3000);

console.log('Server running at http://127.0.0.1:3000/');