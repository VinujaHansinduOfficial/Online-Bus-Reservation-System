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

exports.getAllUsers = getAllUsers;