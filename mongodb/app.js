const express=require('express');
const app=express();
app.listen(3000);
app.use(express.json());
const mongoose=require('mongoose');