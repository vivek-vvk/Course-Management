const express= require('express');
const app = express();

const cors=require('cors');
const mongoose=require('mongoose');

const PORT=process.env.PORT||3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//DB Connection

mongoose
  .connect("mongodb+srv://vivek:vvk123@cluster0.lww1kjp.mongodb.net/courseManagement?retryWrites=true&w=majority" ,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB CONNECTED");
  });




  const loginRoutes = require("./Routes/login");
const studentRoutes=require("./Routes/student");
const courseRoutes =require("./Routes/course");
const profesorRoutes=require("./Routes/professor");


app.use('/home' , courseRoutes);
app.use('/login',loginRoutes);
app.use('/student',studentRoutes);
app.use('/professor',profesorRoutes);



app.listen( PORT , (req,res)=>{
    console.log(`Server Running on ${PORT}`)
 })