// webdriverjs is a client side application which connects to the selenium server powered by phantomjs
const client = require('./client');

client.init();

client.url('https://www.google.com');
client.getTitle((title) => console.log(title));
client.setValue('#lst-ib', 'jumanji');
client.submitForm();
client.end();
