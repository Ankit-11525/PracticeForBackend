// const { model } = require("mongoose");
const Usermodel = require("./UserModel");
let user = {};

const getUser = (req, res) => {
  console.log("request accepted ...");
  res.sendFile(__dirname + "/signuppage.html");
};
const postUser = (req, res) => {
  user = req.body;
  console.log(`request accepted ...`, user);
  res.send({
    msg: "post request accpted",
    user: req.body,
  });
  //   (async function createUser() {
  //     let data = await Usermodel.create(user);
  //     console.log(data);
  //   })()
  Usermodel.create(user);
};
const deleteUser = (req, res) => {
  console.log("user deleted ...");
  res.send(JSON({ msg: "user deleted ...", user: {} }));
};
module.exports = { getUser, postUser, deleteUser };
