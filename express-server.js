const express = require('express');
const app = express();

app.use((res,req,next) => {
    console.log("In the middleware");
    next();
})
app.use((req,res,next) => {
    console.log("In another middleware");
    res.send("Hello from express");
})
app.listen(4000);