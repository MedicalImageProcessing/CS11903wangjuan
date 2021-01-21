const fs = require('fs');
// //fs 错误算法 循环异步
// var path='./load';
// var dirArr=[];

// fs.readdir(path,(err,data)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log(data);

//     for(var i=0;i<data.length;i++)
//     {
//         fs.stat(path+'/'+data[i],(err,stats)=>{
//             if(stats.isDirectory()){
//                 dirArr.push(data[i]);
//             }
//         })
//     }
//     console.log(dirArr);
// })

// console.log(dirArr);


//改造for循环 采用递归进行
var path='./load';
var dirArr=[];

fs.readdir(path,(err,data)=>{
    if(err){
        console.log(err);
        return;
    }
    (function getDir(i){
        if(i==data.length){
            console.log(dirArr);
            return;
        }
        fs.stat(path+'/'+data[i],(error,status)=>{
            if(status.isDirectory()){
                dirArr.push(data[i]);
            }
            getDir(i+1)
        })
    })(0)
})

console.log(dirArr);