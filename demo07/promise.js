+function getData(resolve,reject){
    setTimeout(function(){
        var name='张三';
        resolve(name);
    },1000);
}

var p=new Promise(getData);

p.then((data)=>{
    console.log(data);
})