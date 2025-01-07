const express=require('express');
const app=express();

// function to return a boolean if the age of the person is 18 or above
function checkAge(age){
    if(age>=18){
        return true;
    }else{
        return false;
    }
}

function checkAgemiddleware(req,res,next){
    const age=req.query.age;
    if(age>=18){
        next();
    }else{
        res.json({
            msg:"Sorry, you are not of age!",
        })
    }
}

function seniorCitizenMiddleware(req,res,next){
    const age=req.query.age;
    if(age<60){
        next();
    }
    else{
        res.json({
            msg:"This ride is for people from 18 to 60 years old!"
        })
    }
}

//if you want the middleware should go from all the routes, use below
// app.use(checkAgemiddleware)
// app.get('/ride3',function(req,res){
//     res.json({
//            msg: "You have successfully riden ride 3"
           
//        })
//    })

app.get('/ride1',function(req,res){
    if(checkAge(req.query.age)){
        res.json({
            msg: "You have successfully riden ride 1"
        })
    }
    else{
        res.status(411).json({
            msg:"Sorry, you are not of age yet!"
        })
    }

})

app.get('/ride2',function(req,res){
    if(checkAge(req.query.age)){
        res.json({
            msg: "You have successfully riden ride 1"
        })
    }
    else{
        res.status(411).json({
            msg:"Sorry, you are not of age yet!"
        })
    }

})

// ride3 uses middleware
app.get('/ride3',checkAgemiddleware,function(req,res){
     res.json({
            msg: "You have successfully riden ride 3"
            
        })
    })
    
app.get('/ride4',checkAgemiddleware,seniorCitizenMiddleware,function(req,res){
    res.json({
        msg:"You have successfully riden ride 4"
    })
})

app.listen(3001);