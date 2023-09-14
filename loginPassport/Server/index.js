import bodyParser from "body-parser";
import express from "express";
import cors from "cors"
import mongoose from "mongoose";

import dotenv from "dotenv"
import UserModel from "./models/usermodel.js";
const app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json({extended:true}));
app.use(express.json())
dotenv.config();

app.use(cors())


app.post('/',(req,res)=>{

    const {username,password}=req.body;
    const user=new UserModel({
        username,
        password
    })
    user.save()
    res.status(200).send("data saved")

})



mongoose.connect(process.env.MONGODB).then(()=>{
    app.listen(3000,()=>{
        console.log("data base connected and server started on port 3000");
    })
})

