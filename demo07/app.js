//定义一个isDir判断一个资源是文件还是目录
const fs=require('fs');

async function isDir(path){
    return new Promise((resolve,reject)=>{
        fs.stat(path,(error,stats)=>{
            if(error){
                console.log(error);
                reject(error)
                return;
            }

            if(stats.isDirectory()){
                resolve(true);
            }
            else{
                resolve(false);
            }
        })
    })
}

//获取文件所有资源
function main(){
    var path='./load'
    var dirArr=[];
    fs.readdir(path,async (err,data)=>{
        if(err){
            console.log(err);
            return;
        }
        for(var i=0;i<data.length;i++){
            if(await isDir(path+'/'+data[i])){
               dirArr.push(data[i]);
            }
        }
        console.log(dirArr);
    })
}

main();