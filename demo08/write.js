const fs=require('fs');
var str='';

for(var i=0;i<10;i++){

    str+='哈哈哈哈哈\n';

}

var writeStream=fs.createWriteStream('./data/output.txt');

writeStream.write(str);

//标记写入完成
writeStream.end();

writeStream.on('finish',()=>{
    console.log('写入完成');
})