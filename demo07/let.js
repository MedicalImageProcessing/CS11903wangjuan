// if(true){
//     var a=123;//采用let定义会报错
// }
// console.log(a);


// 常量
// const PI=3.14159;

// // PI=3;//此处定义会发生错误

// console.log(PI);


//模板字符串
// var name='张三';
// var age=20;
// console.log(name+'的年龄是'+age);

// var name='张三';
// var age=20;
// console.log(`${name}的年龄是${age}`);


//方法的简写 属性的简写
// var name='zhangsan';
// var app={
//     "name":name
// }
// console.log(app.name);

// var name='zhangsan';
// var app={
//     name
// }
// console.log(app.name);

// var name='zhangsan';
// var app={
//     name,
//     run:function(){
//         console.log(`${this.name}在跑步`);
//     }
// }
// app.run();


//箭头函数 this指向上下文
// setTimeout(()=>{
//     console.log('执行');
// },1000)


//回调函数
// function getData(callback){
//     setTimeout(function(){
//         var name='张三';
//         callback(name);
//     },1000);
// }
// //从外部获取异步方法里面的数据
// getData(function(aaa){
//     console.log(aaa);
// })

