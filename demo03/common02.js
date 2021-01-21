const http=require('http');

const tools=require('./module/tools.js')

console.log(tools);

http.createServer((req,res)=>{
    res.writeHead(200,{"Content-type":"text/html;charset='utf-8'"});
    res.write("<head><meta charset=UTF-8></head>");
    res.write('你好 nodejs<br>');//<br>用于换行

    var api=tools.formatApi('/api/focus');
    
    res.write(api);
    res.end();
}).listen(3000);