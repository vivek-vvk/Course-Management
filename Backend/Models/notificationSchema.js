const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const notificationschema = new Schema({
   
    name:String,
    message:String,
    course:String,
    date:String,
  
 
});

var notificationdata = mongoose.model('notification',notificationschema);
module.exports = notificationdata;