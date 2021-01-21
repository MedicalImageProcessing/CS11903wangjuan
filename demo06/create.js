// 判断服务器上面有没有upload目录，如果没有则创建。
const fs=require('fs');
var path='./upload';

fs.stat(path,(err,data)=>{
    if(err){
        //执行创建项目
        mkdir(path);
        return;
    }
    if(!data.isDirectory())
    {
        //首先删除文件，再执行创建项目
        fs.unlink(path,(err)=>{
            if(!err){
                mkdir(path); 
            }
            else{
                console.log('请检查传入数据是否正确');
            }
    })
    }
})

function mkdir(dir){
    fs.mkdir(dir,(err)=>{
        if(err){
            console.log(err);
            return;
        }
    })
}