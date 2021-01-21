const http = require('http');
const routes = require('./module/routes.js');
const url = require('url');


http.createServer(function (req, res) {
    //创建静态web服务
    routes.static(req, res, 'static');
    //路由
    var pathname = url.parse(req.url).pathname.replace("/", "");
    var destination;

    if (pathname.indexOf('/') == -1 && pathname != '' && pathname != "favicon.ico" && pathname.indexOf('.') == -1) {
        destination = pathname;
        try {
            routes[destination](req, res);
        } catch (error) {
            routes['error'](req, res);
        }
    }

}).listen(3000);

console.log('Server running at http://127.0.0.1:3000/');