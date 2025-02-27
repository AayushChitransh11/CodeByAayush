// You have been given an express server which has a few endpoints.
// Your task is to create a global middleware (app.use) which will 
// rate limit the requests from a user to only 5 requests per second. 
// If a use sends more than 5 req. in a single second, the server
// should block them with a 404.
// User will be sending in their user id in the header as 'user-id'
//You have been given a numberOfRequestsForUser object to start off
// with which clears every one second.

const express=require('express');
const app=express();


let numberOfRequestsForUser ={};
setInterval(()=>{
    numberOfRequestsForUser={};
},1000);

function checkRequests(req,res,next){
    const userId=req.headers["user-id"];
    if(numberOfRequestsForUser[userId]){
        numberOfRequestsForUser[userId]+=1;
        if(numberOfRequestsForUser[userId]>5){
            res.status(404).send("No Entry");
        }else{
            next();
        }
    }else{
        numberOfRequestsForUser[userId]=1;
        next();
    }
    


}

app.use(checkRequests);

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