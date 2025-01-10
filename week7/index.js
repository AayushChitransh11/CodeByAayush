const express=require('express');
//importing models from db.js
const {UserModel, TodoModel}=require('./db');
const jwt=require("jsonwebtoken");
const mongoose=require('mongoose');
const JWT_SECRET="aayush";

mongoose.connect("");
const app=express();


app.use(express.json());

function auth(req,res,next){
    const token=req.headers.token;
    const response=jwt.verify(token,JWT_SECRET);

    if(response){
        req.userId=response.id;
        next();
    }
    else{
        res.status(403).json({
            message:"Incorrect credentials!"
        })
    }
}

app.post('/signup',async function(req,res){
    const username=req.body.username;
    const name=req.body.name;
    const password=req.body.password;

    await UserModel.create({
        username:username,
        name:name,
        password:password
    })

    res.json({
        message: "You are logged in!"
    }) 

});

app.post('/login',async function(req,res){

    const username=req.body.username;
    const password=req.body.password;

    const user= await UserModel.findOne({
        username:username,
        password:password
    })
    console.log(user);
    if(user){
        const token=jwt.sign({
            id:user._id.toString()
        },JWT_SECRET);
      res.json({
            token: token

        });
    }else{
        res.status(403).json({
            message: "Incorrect credentials!"
        });
    }


});

app.post('/todo',auth,function(req,res){
    const userId=req.userId;
    const description=req.body.description;
    TodoModel.create({
        description: description,
        userId: userId
    })
    res.json({
        message:"Todo Created!"
    })

});
app.get('/todo',auth,async function(req,res){
    const userId=req.userId;

    const todo=await (TodoModel.find({
        userId:userId
    }))
    res.json({
        todo
    })
});

app.listen(3000);
