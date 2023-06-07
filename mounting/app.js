const express=require('express');
const dogRouter=require('./dogs.js');
const app=express();
app.listen(5500);
app.use(express.json());
let users=[
    {
        'id':1,
        'name':"ankit1"
    },
    {
        'id':2,
        'name':"ankit2"
    },
    {
        'id':3,
        'name':"ankit3"
    },
    {
        'id':4,
        'name':"ankit4"
    },
    
];
const userRouter=express.Router();
app.use('/user',userRouter);
app.use('/user',require('./cats.js'));
app.use('/user',dogRouter);
userRouter
.route('/')
.get(getUser)
.post(postUser)
.patch(updateUser)
.delete(deleteUser)

function getUser(req,res)
{
    res.send(users);
}
function postUser(req,res)
{
    console.log(req.body);
    res.send({
        message:'post request recieved',
        users:req.body
    });
}
function deleteUser(req,res)
{
    res.send({
        message:'user deleted',
        users:{}
    });
}
function updateUser(req,res)
{
    res.send({
        message:'user updated'
    });
}
