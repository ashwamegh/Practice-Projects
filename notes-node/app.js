/* eslint-disable */

// console.log("Starting app.js");

// Global modules
const fs = require('fs');
const _ = require('lodash');
const notes = require('./notes.js');
const argv = require('yargs').argv;
const command = process.argv[2];


if(command === "add"){
  notes.add(argv.title, argv.body);
}

else if(command === 'list') {
  notes.listAll();
}

else if(command === 'read'){
  notes.getNote(argv.title);
}

else if(command === 'remove'){
  notes.removeNote(argv.title);
}

else {
  console.log("Please recheck! Command not recognized!");
}
