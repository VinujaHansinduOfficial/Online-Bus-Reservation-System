const express = require("express");
const mongoose = require("mongoose");
const router = require("../server/Route/userroute");

const app = express();

app.use("/users",router)

mongoose.connect("mongodb+srv://admin:WobJiFeRIDHibM9g@cluster0.64xm7.mongodb.net/")
.then(()=> console.log("Connected to MongoDB"))
.then(() => {
    app.listen(5000);
})
.catch((err)=> console.log((err)));