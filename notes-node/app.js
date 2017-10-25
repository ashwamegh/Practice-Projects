/* eslint-disable */

console.log("Starting app.js");

// Global modules
const fs = require('fs');
const _ = require('lodash');
const notes = require('./notes.js');
const yargs = require('yargs');

const command = process.argv[2];
const argv = yargs.argv;

console.log("Process: "+process.argv);
console.log("Yargs: "+argv);
console.log(`Command: ${command}`);
if(command === "add"){
  console.log("Adding new notes");
}else if(command === 'list') {
  console.log("Listing all notes");
}else {
  console.log("Command not recognized!");
}
