var request=require('./module/request.js');

//采用exports暴露{ xxx: { get: [Function: get], post: [Function: post] } }
//采用module.exports暴露{ get: [Function: get], post: [Function: post] }
console.log(request);