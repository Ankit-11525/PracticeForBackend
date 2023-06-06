const express=require('express');
const app=express();
app.listen(3000);
// middleware for post method to change in json format
app.use(express.json()); 
// app.get('/about',(req,res)=>{
//     res.sendFile(__dirname+'/about.html');
// });
// app.get('/',(req,res)=>{
//     res.sendFile(__dirname+'/index.html');
// });
// app.get('/contact',(req,res)=>{
//     res.sendFile(__dirname+'/contact.html');
// });
// app.use((req,res)=>{
//     res.statusCode=404;
//     res.sendFile(__dirname+'/4o4.html');
//     console.log(res.statusCode);
// });
let user=[
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
// app.get('/user',(req,res)=>{
//     res.send(user);
// })
// app.post('/user',(req,res)=>{
//     console.log(req.body);
//     res.send({
//         message:"message recieved",
//         user:req.body
//     });
// })



 //                                               parameters         



// app.get('/user/:username',(req,res)=>{
//     // just id print ho jayega

//     // console.log('user with id : ',req.params.id);
//     console.log('user with username : ',req.params.username);
//     // res.send("user id is received ");
//     res.send(req.params);
// })





//                                                  with 2 parameters


// app.get('/user/:username/:id',(req,res)=>{
//     // just id print ho jayega

//     console.log('user with id : ',req.params.id);
//     console.log('user with username : ',req.params.username);
//     // res.send("user id is received ");
//     res.send(req.params);
// })





//                                             with Query 

app.get('/user',(req,res)=>{
    console.log('user with query :' ,req.query);
    res.send(req.query);
})




