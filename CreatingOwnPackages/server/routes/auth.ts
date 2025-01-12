import jwt from "jsonwebtoken";
import  express  from "express";

import { z } from "zod" ;

const router = express.Router();


// router.post("/signup", async (req,res) => {
//     const parsedResponse = signupInput.safeParse(req.body);
//     if(!parsedResponse.success){
//         return res.status(411).json({
//             msg :"InValid input"
//         })
//     }
//     const { username ,password } = req.body;
//     const user = await User.findOne({ username });
//     if(user) {
//         res.status(403).json({message:"User already exists"});
//     }
//     else{
//         const newUser = new User({username,password});
//         await newUser.save();
//     }
// })