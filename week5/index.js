const express=require('express');
const app = express();

app.get('/sum',function(req,res){
    const num1=parseInt(req.query.num1);
    const num2=parseInt(req.query.num2);

    res.json({answer: num1+num2})

});
app.get('/sum/:firstArg/:secondArg',function(req,res){
    const num1=parseInt(req.params.firstArg);
    const num2=parseInt(req.params.secondArg);

    res.json({answer: num1+num2})

});
app.get('/multiply',function(req,res){
    const num1=req.query.num1;
    const num2=req.query.num2;

   res.json({answer: num1*num2}) 
});

app.get('/multiply/:firstArg/:secondArg',function(req,res){
    const num1=req.params.firstArg;
    const num2=req.params.secondArg;

    res.json({ answer:num1*num2
    })
});

app.get('/divide',function(req,res){
    const num1=req.query.num1;
    const num2=req.query.num2;

   res.json({answer: num1/num2}) 
});

app.get('/divide/:firstArg/:secondArg',function(req,res){
    const num1=req.params.firstArg;
    const num2=req.params.secondArg;

    res.json({
        answer: num1/num2
    })
});

app.get('/subtract',function(req,res){
    const num1=req.query.num1;
    const num2=req.query.num2;

   res.json({answer: num1-num2}) 
});


app.get('/subtract/:firstArg/:secondArg',function(req,res){
    const num1=req.params.firstArg;
    const num2=req.params.secondArg;

    res.json({
        answer: num1-num2
    })
});

app.listen(3000);
