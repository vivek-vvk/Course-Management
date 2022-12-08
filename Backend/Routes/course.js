const express = require('express');
const coursedata = require('../Models/courseSchema');
const router = express.Router();


router.get("/course" , (req,res)=>{

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
   
     coursedata.find()
     .then((data)=>{
      res.send(data)
     });
  
   });








module.exports=router;