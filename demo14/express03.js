const http = require("http");//引入http模块
const app = require('./module/routes.js');//引入app魔块

//寻找http server可快速创建静态web服务
http.createServer(app).listen(3000);

//配置路由
app.get('/login',function(req,res){
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end('执行登录操作');
})


app.get('/',function(req,res){
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end('首页');
})


app.get('/news',function(req,res){
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end('新闻页面');
})

console.log('Server running at http://127.0.0.1:3000/');