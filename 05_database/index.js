const express = require("express");
const app = express();
const mongoose = require("mongoose");

app.use(express.json);

mongoose.connect("mongodb+srv://pradeep20020102:Pr01022002Pr@cluster00.ghjolwt.mongodb.net/userappnew");

const User = mongoose.model('Users',{name:String,email:String,password:String});

app.post("/signup",async function(req,res){
    const name = req.body.name;
    const username = req.body.username;
    const password = req.body.password;

    const existingUser = await User.findOne({email:username});
    if(existingUser){
        return res.status(400).send("Username already exists");
    }

    const user = new User({
        name: name,
        email:username,
        password:password
    });

    user.save();
    res.json({
        msg:"User created successfully"
    })
})

app.listen(3000);