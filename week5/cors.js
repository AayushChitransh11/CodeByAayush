//Assignment
//1. Create a backend server in node.js that returns the sum endpoint
//2. Write an HTML file,that hits the backend server using the 'fetch' api

const express=require('express');
const cors=require('cors');

const app=express();


app.use(express.json());
app.use(cors()); //All front end will be able to send the request
//for specific domains, use below
app.use(cors({
    domains: ["http://localhost:3003/sum","http://www.google.com"]
})) 

app.post('/sum',function(req,res){
    const num1=parseInt(req.body.num1);
    const num2=parseInt(req.body.num2);

    res.json({
        sum:num1+num2
    })
})

app.listen(3003);