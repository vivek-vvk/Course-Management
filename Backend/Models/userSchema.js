const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({

  email: String,
  username: String,
  password: String,
  role: String,
  rej: Boolean,

});

var userdata = mongoose.model('userdata', UserSchema);
module.exports = userdata;