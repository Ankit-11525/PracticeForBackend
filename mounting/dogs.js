const express=require('express');
let dogs=[
    {
        'id':1,
        'name':"tommy"
    },
    {
        'id':2,
        'name':"ushhh"
    },
    {
        'id':3,
        'name':"nobita"
    },
    {
        'id':4,
        'name':"jiyan"
    },
];
const dogRouter=express.Router();
dogRouter
.route('/dogpage')
.get(getDog)
.post(postDog)
.patch(updateDog)
.delete(deleteDog)

function getDog(req,res)
{
    res.send(dogs);
}
function postDog(req,res)
{
    console.log(req.body);
    res.send({
        message:'post request recieved',
        dogs:req.body
    });
}
function deleteDog(req,res)
{
    res.send({
        message:'kutta mar gya',
        dogs:{}
    });
}
function updateDog(req,res)
{
    res.send({
        message:'kutta updated'
    });
}
module.exports = dogRouter;