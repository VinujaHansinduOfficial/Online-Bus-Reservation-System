const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use("/",(req, res, next) =>{
    res.send("It Is Working");
})

mongoose.connect("mongodb+srv://admin:WobJiFeRIDHibM9g@cluster0.64xm7.mongodb.net/")
.then(()=> console.log("Connected to MongoDB"))
.then(() => {
    app.listen(5000);
})
.catch((err)=> console.log((err)));