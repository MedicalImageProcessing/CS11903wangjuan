const fs = require('fs');
const path = require('path');
const url = require('url');

//函数类型尽量保持一致 例如此处两个函数均为匿名型  均为私有方法
//扩展res
function changeRes(res){
    res.send=(data)=>{
        res.writeHead(200, { 'Content-Type': 'text/html;charset="utf-8"' });
        res.end(data);
    }
}
//根据后缀名获取文件类型
function getFileMime(extname) {
    //同步方法
    var data = fs.readFileSync('./data/mime.json');
    let mimeObj = JSON.parse(data.toString());
    return mimeObj[extname];
}
//静态web服务的方法
function initStatic(req, res, staticPath) {
    //获取地址
    let pathname = url.parse(req.url).pathname;
    pathname = pathname == '/' ? '/index.html' : pathname;
    let extname = path.extname(pathname);
    //2、通过fs模块读取文件
    try {
            let data = fs.readFileSync('./' + staticPath + pathname);
            if (data) {
                let mime = getFileMime(extname);
                res.writeHead(200, { 'Content-Type': '' + mime + ';charset="utf-8"' });
                res.end(data);
            }
        } catch (error) {

        }

}


//封装并重构 路由配置 模块
let server = () => {
    //将get、post注册方法分开而谈
    // let G1={};
    // let G2={};
    //全局变量
    let G = {
        _get: {},
        _post: {},
        //配置默认静态web目录
        staticPath: 'static'
    };

    let app = function (req, res) {
        //扩展res的方法  --在外部可以直接采用res.send
        changeRes(res);
        //配置静态web服务
        initStatic(req,res,G.staticPath);

        let pathname = url.parse(req.url).pathname;
        //获取请求类型
        let method = req.method.toLowerCase();
        console.log(method);

        if (G['_' + method][pathname]) {
            //判断请求类型
            if (method == "get") {
                //执行方法
                G._get[pathname](req, res);
            }
            else if(method == "post"){
                //post 获取post的数据 把它绑定到req.body
                let postData = '';
                req.on('data', (chunk) => {
                    postData += chunk;
                })
                req.on('end', () => {
                    //将数据绑定到req.body
                    req.body = postData;
                    G._post[pathname](req, res);
                })
            }
            else {
            res.writeHead(404, { 'Content-Type': 'text/html;charset="utf-8"' });
            res.end('页面不存在');
            }
        }
        
    }
    //配置get请求
    app.get = function (str, cb) {
        //注册方法
        G._get[str] = cb;
    }
    //配置post请求
    app.post = function (str, cb) {
        //注册方法
        G._post[str] = cb;
    }
    //配置静态web目录
    app.static = function (staticPath) {
        G.staticPath = staticPath;
    }

    return app;
}


//暴露模块
module.exports = server();
