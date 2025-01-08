const express=require('express');
const jwt=require('jsonwebtoken');

const app=express();

const JWT_SECRET="aayushjwt";

app.use(express.json());

const users=[];



app.post('/signup',function(req,res){
    const username=req.body.username;
    const password=req.body.password;

    users.push({
       username: username,
       password: password
    })
    
    res.send({
        message:"Signup successfull!"
    })
    console.log(users); 
});


app.post('/signin',function(req,res){
    const username=req.body.username;
    const password=req.body.password;

    const user=users.find(user=>user.username===username && user.password===password);
            
            if(user){
                const token=jwt.sign({
                    username: username
                }, JWT_SECRET );
                //user.token=token;
                res.send({
                    token
                })
                console.log(users);
            
        } else{
            res.status(403).send({
                message:"Invalid username and password!"
            })
        }
        console.log(users);
    });

app.get('/me',function(req,res,){
    const token=req.headers.token;
    const decodedInformation=jwt.verify(token,JWT_SECRET);
    const username=decodedInformation.username;

    let foundUser=null;

    for(let i=0;i<users.length;i++){
        if(users[i].username==username){
            foundUser=users[i];
        }
    }
    if(foundUser){
    res.json({
        username:foundUser.username,
        password:foundUser.password
    });
    }else{
        res.json({message:"User not found!"})
    }
})


app.listen(3000);