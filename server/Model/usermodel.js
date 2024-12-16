const mongoose = require('mongoose');
const Scheme = mongoose.Schema;
const router = require('./Route/userroute')

const  userSchema =  new Scheme({
    name:{
        type: String,
        required: true,
    },
    gmail:{
        type: String,
        required: true,
    },
    age:{
        type: Number,
        required: true,
    },
    address:{
        type: Number,
        required: true,
    }
});


module.exports = mongoose.model(
    "UserModedl",
    userSchema
)

