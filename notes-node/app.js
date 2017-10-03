console.log("Starting App");

const fs = require('fs');
const os = require('os');
const user = os.userInfo();


fs.appendFile('messages.txt', `Hello ${user.username}!`, (err) =>{
  if(err) throw err;
  console.log("data added");
});
