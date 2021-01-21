const http = require("http");//引入http模块
const app = require('./module/routes.js');//引入app模块
const ejs = require('ejs')//引入ejs渲染模板

//寻找http server可快速创建静态web服务
http.createServer(app).listen(3000);
app.get('/',function(req,res){
    res.writeHead(200, { 'Content-Type': 'text/html;charset="utf-8"' });
    res.end('首页');
})

//配置路由
app.get('/login', function (req, res) {
    // res.writeHead(200,{'Content-Type':'text/plain'});
    // res.end('执行登录操作');
    ejs.renderFile("./views/form.ejs", {}, (err, data) => {
        //对此进行封装--对应在routes文件中进行定义changeRes
        // res.writeHead(200, { 'Content-Type': 'text/html;charset="utf-8"' });
        // res.end(data);
        res.send(data);
    })
})

app.post('/doLogin', function (req, res) {
    console.log(req.body);
    // res.writeHead(200, { 'Content-Type': 'text/html;charset="utf-8"' });
    // res.end(req.body);
    res.send(req.body);
})


console.log('Server running at http://127.0.0.1:3000/');