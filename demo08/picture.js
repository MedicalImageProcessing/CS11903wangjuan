const fs=require('fs');
var readStream=fs.createReadStream('./xiao.jpg');
var writeStream=fs.createWriteStream('./data/xiao.jpg');

readStream.pipe(writeStream);