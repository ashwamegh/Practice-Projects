let mongoose = require('mongoose');
let bcrypt = require('bcrypt');
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

// authenticate user aganist database docs

UserSchema.statics.authenticate = (email, password, callback)=>{
  User.findOne({ email : email })
      .exec((err, user) =>{
        if(err){
           return callback(err);
        }else if( !user ){
          let err = new Error(" User not found");
          err.status = 401;
          return callback(err);
        }

        bcrypt.compare(password, user.password, ( err, result) =>{
          if (result === true){
            return callback(null, user);
          }
          else{
            return callback();
          }
        });
      });
};

UserSchema.pre('save', function(next){
  let user = this;
  bcrypt.hash(user.password, 10 , (err, hash)=>{
    if(err){
      next(err);
    }
    user.password = hash;
    next();
  });
});

let User = mongoose.model('User', UserSchema);
module.exports = User;
