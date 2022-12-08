const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CourseSchema = new Schema({

  title:String,
  description: String,
  image:String

});

var coursedata = mongoose.model('course', CourseSchema);
module.exports = coursedata;