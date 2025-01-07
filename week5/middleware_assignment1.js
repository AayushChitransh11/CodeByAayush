// Assignment
//You have to create a few standard middlewares for your application
//you have to create a middleware for logging the number of reqests on the server
// You have to create a middleware for rate limitubg a users request based on their 
// username passed in the Header
// You have to create a middleware for logging the number of errors on a Server
// To test, go to the 01-middlewares folder and run `npx jest ./tests`

const express=require('express');
const app=express();

let requestCount=0;

//you have been given an express server which has a few endpoints.
//your task is to create a global middleware (app.use) which will maintain a count of the number of
//requests made to the server in the global requestCount variable

function requestCountMiddleware(req,res,next){
    requestCount+=1;
    next();
}

app.use(requestCountMiddleware);


app.get('/user',function(req,res){
    res.status(200).json({name:"Aayush"});
});

app.post('/user',function(req,res){
    res.status(200).json({msg: 'Created dummy user successfully!'});
});

app.get('/requestCount',function(req,res){
    res.status(200).json({requestCount});
});

app.listen(3002);