var express = require('express');
var router = express.Router();

// Importing Mongoose Schema
let User = require('../models/user');

// GET /
router.get('/', function(req, res, next) {
  return res.render('index', { title: 'Home' });
});

// GET /about
router.get('/about', function(req, res, next) {
  return res.render('about', { title: 'About' });
});

// GET /contact
router.get('/contact', function(req, res, next) {
  return res.render('contact', { title: 'Contact' });
});

// GET /register
router.get('/register', (req, res, next) => {
  return res.render('register', { title: 'Sign Up'});
});

// GET /login

router.get('/login', (req, res, next) =>{
  return res.render('login', {title: 'Log In'});
});


// POST /register
router.post('/register', (req, res, next) => {
  if( req.body.name && req.body.favoriteBook && req.body.password && req.body.confirmPassword && req.body.email){

    if( req.body.password !== req.body.confirmPassword){
      let err = new Error(" Passwords do not match.");
      err.status = 400;
      return next(err);
    }

    //  creating User object
    let userData = {
      email : req.body.email,
      name : req.body.name,
      favoriteBook: req.body.favoriteBook,
      password : req.body.password
    };

    User.create(userData, (error , user)=>{
      if (error){
        return next(error);
      }else {
        return res.redirect('/profile');
      }
    })

  }else {
    let err = new Error("All Fields are required!");
    err.status = 400;
    return next(err);
  }
});


// POST /login

router.post('/login' , (req, res, next) =>{
  if(req.body.email && req.body.password){

    User.authenticate(req.body.email, req.body.password, ( err, user ) => {
      if (err || !user){
        let err = new Error(" Wrong Username or password");
        err.status = 401;
        return next(err);
      }else{
        req.session.userId  = user._id;
        return res.redirect('/profile');
      }
    });
  }else{
    let err = new Error(" Email and password are required!");
    err.status = 401;
    return next(err);
  }
});

module.exports = router;
