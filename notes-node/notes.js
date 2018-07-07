// console.log('Starting notes.js');
const fs = require('fs');

module.exports = {
  add: (a, b) => {
    console.log('Adding notes', a, b);
    fs.appendFile('messages.txt', `${a} ${b}\n`, (err) => {
      if (err) {
        throw err;
      }
    });
  },

  listAll: () => {
    console.log('Getting all notes');
    fs.readFile('messages.txt', { encoding: 'utf8' }, (err, data) => {
      if (err) {
        throw new Error(err);
      }
      console.log(data);
    });
  },

  getNote: (title) => {
    console.log('Getting your note with title:', title);
  },

  removeNote: (title) => {
    console.log('Removing your note with title:', title);
  },
};
