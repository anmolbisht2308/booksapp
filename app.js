const express=require("express")

const mongoose=require("mongoose")


const app=express()

mongoose.connect("mongodb://localhost:27017/UserssDB",{useNewUrlParser: true})


const userSchema={
   name:String,
   email:String,
   referreduser:String,
   ispaymentmade:Boolean,
   totalearning:Number
}

const User=mongoose.model("User",userSchema)


// app.route("/user")

app.get("/user",function(req,res){
    User.find(function(err,foundUSers){
        if(!err){
            res.send(foundUsers)
        }else{
            res.send(err)
        }
    })
})


app.post("/user",function(req,res){
    const newUser=new User({
        name:req.body.name,
        email:req.body.email,
        totalearning:req.body.totalearning,
        referreduser:req.body.referreduser

    })


    newUser.save(function(err){
        if(!err){
            res.send("Succesfully Saved To Database")
        }else{
            res.send(err)
        }
    })


    User.findOne({email:referreduser},function(err,FoundUser){
        if(err){
            console.log(err);
        }
        else{
            FoundUser.totalearning= FoundUser.totalearning+10
            }
        })
    })








app.listen(3000,function(){
    console.log("server is hosted on localserver:3000")
})