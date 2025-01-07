const express=require('express');
const app=express();

app.use(express.json());

app.post('/sum',function(req,res){
    const num1=req.body.num1;
    const num2=req.body.num2;

    res.json({
        sum: num1+num2
    })
})


app.listen(3003);