const express = require("express")
  
// Importing all the routes
const homeroute = require("./routes/Home.js")
const loginroute = require("./routes/login")
  
// Creating express server
const app = express()
  
// Filtering the routes path
app.use("/", homeroute)
app.use("/", loginroute)
  
// Server setup
app.listen((3000), () => {
    console.log("Server is Running")
})