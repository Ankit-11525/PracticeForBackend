const express = require("express");
const UserRouter=express.Router();
const {getUser,postUser,deleteUser}=require('./UserController');
UserRouter
.route('/')
.get(getUser)
.post(postUser)
.delete(deleteUser);
module.exports =UserRouter;



