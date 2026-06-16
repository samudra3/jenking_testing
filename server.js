import express from 'express';
import mongoose from 'mongoose';
import connectdb from './db.js';
import userModel from './schema.js';

const app= express();

app.use(express.json());

app.get('/',(req,res)=>{
      res.send("welcome to the page")
})
app.post('/create',async (req,res)=>{
      const {name,email}=req.body;
      const user= await userModel.create({name,email})
      res.status(200).json({
            "message":"successfully created",
            data:user
      })

})
app.get('/show',async (req,res)=>{
      const user= await userModel.find()
      if(!user)console.log('error happened');
      res.json({
            data:user
      })
})

connectdb()
.then(()=>{
      console.log('database connected successfully');
})
.catch((err)=>{
      console.log("connect is not established with the erro: ",err)

})
app.listen(3000,()=>{
      console.log('server is running');
})