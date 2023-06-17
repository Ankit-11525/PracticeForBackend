const express = require("express");
const Usermodel = require("./UserModel");
const UserRouter=require('./UserRoute');
const app = express();
app.listen(3000);
app.use(express.json());


const mongoose = require("mongoose");
const db_link =
  "mongodb+srv://ankitpathak11525:Yh7x5rrmCZ4hyogg@practicebackend.7cjibxo.mongodb.net/?retryWrites=true&w=majority";
mongoose
  .connect(db_link)
  .then(() => {
    console.log("DB connected ....");
  })
  .catch((err) => {
    console.log(err);
  });



// (async function createUser() {
//   let user = {
//     name: "ankit",
//     password: "1234567",
//     email: "ankitpathak@11",
//   };
//   let data =await Usermodel.create(user);
//   console.log(data);
// })();



// user router 
app.use('/user',UserRouter);