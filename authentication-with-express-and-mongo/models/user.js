let mongoose = require('mongoose');

let UserSchema = mongoose.Schema({
  email:{
    type: String,
    required: true,
    unique: true,
    trim : true
  },
  name:{
    type: String,
    required: true,
    trim : true
  },
  favoriteBook: {
    type: String,
    required: true,
    trim : true
  },
  password:{
    type: String,
    required: true
  }
});

let User = mongoose.model('User', UserSchema);
module.exports = User;
