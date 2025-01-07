const express=require('express');
const app=express();

// Create a middleware function that logs each incoming 
//request’s HTTP method, URL, and timestamp to the console

function logMiddleware(req,res,next){
    console.log("Method is "+req.method);
    console.log("Method is "+req.url);
    console.log(new Date());
    console.log("Hostname is "+req.hostname);
    
    next();
}


app.use(logMiddleware);

app.get('/user',function(req,res){
    res.status(200).json({name:"Aayush"});
});

app.post('/user',function(req,res){
    res.status(200).json({msg: 'Created dummy user successfully!'});
});

app.get('/requestCount',function(req,res){
    res.status(200).json({requestCount});
});

app.listen(3005);