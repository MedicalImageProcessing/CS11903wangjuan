const http =require('http');
/*req 获取客户端传过来的信息
  res 给浏览器响应
*/
http.createServer((req,res)=>{

    console.log(req.url);//获取url
    
    //设置响应头
    //状态码是200，文件类型是html，字符集是utf-8
    res.writeHead(200,{"content-type":"text/html;charset='utf-8'"});
    
    res.write('this is nodejs');

    res.end();//结束响应

}).listen(3000);