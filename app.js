var path=require("path");
var express=require("express");
var app=express();
app.use("/",express.static(path.join(__dirname,"views")));
app.listen(16944,function(){
	console.log(333);
})

module.exprots=app;