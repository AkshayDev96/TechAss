const mongoose = require("mongoose");

const userModel = mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    trim: true
  },
  mobile: {
    type: String,
    trim: true
  },
  roll_no: {
    type: String,
    trim: true
  },
  address: {
    type: String,
    trim: true
  }
},
  {
    timestamps: true,
  });
module.exports = mongoose.model("user", userModel);
