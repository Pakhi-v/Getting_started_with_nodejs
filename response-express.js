const express = require('express');
const app = express();
  
var computerSciencePortal = "GeeksforGeeks";
  
app.get('/' , (req,res)=>{
   // Server will send GeeksforGeeks as response
   res.send(computerSciencePortal); 
})
  
// Server setup
app.listen(4000 , ()=>{
    console.log("server running");
});

//or 
//    const express=require('express');
//    const app=express();
//    app.use("/",(req,res,next)=>{
//    console.log("Always Runs");
 //   next();
//    })
//    app.use("/new-product",(req,res,next)=>{
//    console.log("Runs when new-prodcut is requested");
//    res.send("new-product requested");
//    })
//    app.use("/new",(req,res,next)=>{
 //   console.log("next is requested");
 //   res.send("new is requested");
//    })

//    app.listen(3000)