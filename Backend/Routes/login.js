const express = require('express')
const router = express.Router();
const jwt = require ("jsonwebtoken");
const bcrypt = require("bcrypt");
const userdata = require("../Models/userSchema");

const saltRounds = 10;


router.post("/signup" , (req,res)=>{
    res.header("Access-Control-Allow-Orgin", "*");
    res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS");
  
        var user = req.body.data;
  
        const salt = bcrypt.genSaltSync(saltRounds);
        const pssd = bcrypt.hashSync(user.password, salt);
  
        userdata.findOne({email:user.email.trim()})
        .then((data)=>{
        if(data===null){
  
          var adduser = {
              email:user.email,
              username:user.username,
              password:pssd,
              role:user.role,
              rej:"false",
           }
  
          var adduser = new userdata(adduser);
          adduser.save();
          res.send({ status: true, data: 'Success' })
        }
        else{
          console.log("Email already taken")
          res.send({ status: false, data: 'Email already taken' })
        }
       })
  
  });
  







router.post('/professorlogin',(req,res)=>{
  res.header("Access-Control-Allow-Orgin", "*");
  res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS");


  var admin=req.body.data;
console.log(admin.email);

  userdata.findOne({email:admin.email.trim(),role:admin.role})
.then((data)=>{
   
  if(data===null)
  {
     res.send({status:false,data:'This account does not exist'});
  } else
  {
    bcrypt.compare(admin.password,data.password,function(err,result){
     if(result){
                  let payload = {subject:data.email};
                  let token = jwt.sign(payload , "hiddenkey")
                  var email = data.email;
                   var username = data.username;
                 res.send({ status: true, data: 'Success', email , token , username})
              }
             else{
                res.send({ status: false, data: 'Incorrect Username or Password'})
                  }

         })};
     });

});








router.post("/studentlogin" , (req,res)=>{
  res.header("Access-Control-Allow-Orgin", "*");
  res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS");

  var student =req.body.data

  console.log(student.email , student.password , student.role);

  userdata.findOne({email:student.email.trim() , role:student.role})
  .then((data)=>{

  
    if(data===null){
        res.send({ status: false, data: 'Account does not exist'})
    }else { 
    
        bcrypt.compare(student.password , data.password , function(err, result) {
          if (result) {
            console.log(result)
            let payload = {subject:data.email};
            let token = jwt.sign(payload , "secretkey")
            var email = data.email;
            var username = data.username
            res.send({ status: true, data: 'Success', email , token , username})
         }
         else{
              res.send({ status: false, data: 'Incorrect  Password'})
          }
      });
       
    }


  });
});






  
  module.exports=router;