const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ApprovedSchema = new Schema({

  email: String,
  username: String,
  phonenumber: Number,
  address: String,
  qualification: String,
  course:String


});

var profile = mongoose.model('profile', ApprovedSchema);
module.exports = profile;