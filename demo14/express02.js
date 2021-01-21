let G={};

let app=function(req,res){
    // console.log('调用app方法')
    if(G['/login']){
        G['/login'](req,res);//执行方法 --调用login的时候将req,res(形参)赋给调用中的相应量
    }
}

app.get=function(str,cb){
    //注册方法
    G[str]=cb;
}

//配置路由
app.get("/login",function(req,res){//(实参)
    // res.send('hello world');
    console.log('执行login方法');
});

setTimeout(()=>{
    app('req,res');
},1000);//1秒后执行