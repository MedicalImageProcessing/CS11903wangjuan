// async function test(){
//     return '您好nodejs';
// }

// const { reject } = require("async");

// console.log(test());


//await必须用在async的方法包装


// async function test(){
//     return '您好nodejs';
// }

// async function main(){

//     var data=await test();//获得异步方法里面的数据
    
//     console.log(data);
// }
// main();


// async function test(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(function(){
//             var name='张三';
//             resolve(name);
//         },1000);
//     })
// }

// async function main(){
//     var data=await test();
//     console.log(data);
// }
// main();