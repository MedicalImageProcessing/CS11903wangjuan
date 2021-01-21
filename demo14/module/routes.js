//封装 路由配置 模块
const { parse } = require('querystring');
const url=require('url');//引入url模块

let G={};

let app=function(req,res){
    
    let pathname=url.parse(req.url).pathname;

    if(G[pathname]){
        G[pathname](req,res);
    }
    else{
        res.writeHead(404,{'Content-Type':'text/plain'});
        res.end('页面不存在');
    }
}

app.get=function(str,cb){
    //注册方法
    G[str]=cb;
}

//暴露模块
module.exports=app;
