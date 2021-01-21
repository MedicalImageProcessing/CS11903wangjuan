var obj={
    get:function()
    {
        console.log('从服务器获取数据')
    },
    post:function()
    {
        console.log('提交数据')
    }
}

//exports .xxx=obj//通过exports暴露对象

module.exports=obj;//通过module.exports暴露对象，直接等于对象名即可