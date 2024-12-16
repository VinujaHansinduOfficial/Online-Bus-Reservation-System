const User = require("../Model/usermodel");

const getAllUsers = async (req, res, next) => {

    let Users;

    try{
        users = await User.find();
    }catch (err){
        console.log(err)
    }

    if(!users){
        return res.Status(404).json({message: "User is not found"});
    }
    return res.status(200).json({users});
}

// data instert
const addUser = async (req, res, next) =>{
    const {name,gmail,age,address} = req.body;

    let users;

    try {
        users = new User({name,gmail,age,address});
        await users.save();
    } catch (err) {
        console.log(err);
    }

    if(!users){
        return res.Status(404).send({message: "unable to add users"});
    }

    return res.status(200).json({users});
};



exports.getAllUsers = getAllUsers;
exports.addUser =addUser;