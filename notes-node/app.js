console.log("Starting app.js");

// Global modules
const fs = require('fs');
const os = require('os');
const _ = require('lodash');

// Local Modules
const user = os.userInfo();
const notes = require('./notes.js');


console.log(_.isString(true));
console.log(_.isString("true"));
// fs.appendFile('messages.txt', `Hello ${user.username}!`, (err) =>{
//   if(err) throw err;
//   console.log("data added");
// });

const result = notes.add(212,32);


console.log(result);
