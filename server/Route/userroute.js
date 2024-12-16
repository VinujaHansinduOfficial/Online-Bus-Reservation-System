const express = require("express");
const router = express.Router();

const User = require("../Model/usermodel");
const UserController = require("../Controllers/usercontroller");

router.get("/",UserController.getAllUsers);

module.exports = router;