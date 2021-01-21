const fs=require('fs');


//1.fs.stat检测是文件还是目录
// fs.stat('./html',(err,data)=>{
//     if(err){
//         console.log(err);
//         return;
//     }

//     console.log(`文件:${data.isFile()}`);
//     console.log(`目录:${data.isDirectory()}`);
// })

// fs.stat('./package.json',(err,data)=>{
//     if(err){
//         console.log(err);
//         return;
//     }

//     console.log(`文件:${data.isFile()}`);
//     console.log(`目录:${data.isDirectory()}`);
// })


//2、fs.mkdir 创建目录
// fs.mkdir('./css',(err)=>{

//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log('创建成功');
// })


// 3、fs.writeFile 创建写入文件
// fs.writeFile('./html/index.html','hello world!',(err)=>{

//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log('创建写入文件成功');
// })


// 4、fs.appendFile 追加文件
// fs.appendFile('./css/base.css','body{color:red}',(err)=>{

//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log('appendFile成功');
// })

// fs.appendFile('./css/base.css','h3{color:green}',(err)=>{

//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log('appendFile成功');
// })


// 5、fs.readFile 读取文件
// fs.readFile('./html/index.html',(err,data)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     //console.log(data);//<Buffer 68 65 6c 6c 6f 20 77 6f 72 6c 64 21>
//     console.log(data.toString());//把Buffer转换成string类型

// })


//6、fs.readdir 读取目录
// fs.readdir('./html',(err,data)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log(data);
// })


//7、fs.rename 重命名 功能：1、表示重命名 2、移动文件
// fs.rename('./html','./HTML',(err)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log('重命名成功');
// })

// fs.rename('./HTML/aaa.html','./css/aaa.css',(err)=>{
    
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log('重命名以及移动成功！');
// })


//8、fs.rmdir 删除目录  目录中需要不含其它文件
// fs.rmdir('./aaaa',(err)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log('删除目录成功');
// })


//9、fs.unlink 删除文件
// fs.unlink('./css/aaa.css',(err)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log('删除文件成功');
// })