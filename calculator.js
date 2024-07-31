const express= require("express");
const bodyParser= require("body-parser");
const app=express();


app.use(bodyParser.urlencoded({extended:true}));


app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
});
app.post("/", function(req,res){
   
   var num_1=Number(req.body.num_1);
   var num_2= Number(req.body.num_2);
   var result=num_1+num_2;
   res.send("thanks for sending" + result);
});
 
app.get("/bmicalculator", function(req,res){
    res.sendFile(__dirname+"/bmiCalculator.html");
});

app.post("/bmiCalculator",function(req,res){
    console.log(req.body.weight);
    var weight=parseFloat(req.body.weight);
    var height=parseFloat(req.body.height);
    var submit= weight / (height*height);
    res.send("the bmi result is "+ submit);
});

app.listen(3000, function()
{   console.log;("server is running");

});