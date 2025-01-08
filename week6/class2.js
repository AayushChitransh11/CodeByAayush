
const express=require('express');
const jwt=require('jsonwebtoken');
const JWT_SECRET="aayush";
const app=express();
app.use(express.json());

const users=[];



function auth(req,res,next){
    const token=req.headers.token;
    const decodedData=jwt.verify(token,JWT_SECRET);
    if(decodedData.username){
        req.username=decodedData.username;
        next();
    }else{
        res.json({
            message:"Sign up again"
        })
    }
}
app.post('/signup',function(req,res){
    const username=req.body.username;
    const password=req.body.password;

    users.push({
        username:username,
        password:password
    })

    res.json({
        message:"Signed up successfully!"
    })
})

app.post('/signin',function(req,res){
    const username=req.body.username;
    const password=req.body.password; 

    let foundUser=null;
    for(let i=0;i<users.length;i++){
        if(users[i].username===username && password===password){
            foundUser=users[i];
        }
    }
    if(!foundUser){
        res.json({
            message:"Incorrect Credentials!"
        })
        return
    }
    else{
        const token=jwt.sign({
            username
        },JWT_SECRET);
        res.json({
            token: token
        })
    }

   

})
app.get('/me',auth,function(req,res){
    
    let foundUser=null;
    for (let i=0;i<users.length;i++){
        if(users[i].username===req.username){
            foundUser=users[i];
        }
        
    }
    
    res.json({
        username: foundUser.username,
        password: foundUser.password
    })
    
    }
    
)


app.listen(3000);