const express=require('express');
let cats=[
    {
        'id':1,
        'name':"kitty"
    },
    {
        'id':2,
        'name':"petty"
    },
    {
        'id':3,
        'name':"llii"
    },
    {
        'id':4,
        'name':"randomcat"
    },
];
const catRouter=express.Router();
catRouter
.route('/catpage')
.get(getUser)
.post(postUser)
.patch(updateUser)
.delete(deleteUser)

function getUser(req,res)
{
    res.send(cats);
}
function postUser(req,res)
{
    console.log(req.body);
    res.send({
        message:'post request recieved',
        cats:req.body
    });
}
function deleteUser(req,res)
{
    res.send({
        message:'cat mar gyi',
        cats:{}
    });
}
function updateUser(req,res)
{
    res.send({
        message:'cat updated'
    });
}
module.exports = catRouter;