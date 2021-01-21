//封装并重构 路由配置 模块
//由于暴露元素等太多，因而重构
const { parse } = require('querystring');
const url = require('url');//引入url模块

function changeRes(res) {
    res.send = (data) => {
        res.writeHead(200, { 'Content-Type': 'text/html;charset="utf-8"' });
        res.end(data);
    }
}

let server = () => {
    //将get、post注册方法分开而谈
    // let G1={};
    // let G2={};

    let G = {};
    G._get = {};
    G._post = {};

    let app = function (req, res) {
        //扩展res的方法  --在外部可以直接采用res.send
        changeRes(res);

        let pathname = url.parse(req.url).pathname;
        //获取请求类型
        let method = req.method.toLowerCase();

        if (G['_' + method][pathname]) {
            //判断请求类型
            if (method == "get") {
                //执行方法
                G._get[pathname](req, res);
            }
            else {
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
        }
        else {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('页面不存在');
        }
    }

    app.get = function (str, cb) {
        //注册方法
        G._get[str] = cb;
    }
    app.post = function (str, cb) {
        //注册方法
        G._post[str] = cb;
    }

    return app;
}


//暴露模块
module.exports = server();
