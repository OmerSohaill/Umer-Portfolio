const express=require('express');
const routes=express.Router();
const path = require('path');
routes.get("/",function(req,res){
    const filePath = path.join(__dirname, '../views', 'umer.png');
    res.download(filePath);
})

module.exports=routes;