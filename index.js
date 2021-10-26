const express=require('express');
const app=express();
require("dotenv").config();
const port = process.env.PORT;
const DB=process.env.DB;
const cors=require('cors');
const mongoose = require('mongoose');
//middlewares
app.use(cors());
app.use(express.json());

//database connection
mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=>{
    console.log("database connected successfully");
})
.catch(err=>{
    console.log(err);
})
//routes
app.get("/",(req,res)=>{
    res.send("server is all good");
})
//listen
app.listen(port,()=>{
    console.log(`server is up and running on ${port}`);
})