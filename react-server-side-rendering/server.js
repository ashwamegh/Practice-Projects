require('babel-register')({
    presets:['react']
});
let express = require('express');
let app = express();
let React = require('react');
let ReactDOMServer = require('react-dom/server');

let Component = require('./Component.jsx');

let bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

app.use(express.static('public'));

app.get('/', (request, response) => {
    let html = ReactDOMServer.renderToString(React.createElement(Component));
    response.send(html);
});

app.post('/', (request, response) => {
    console.log(request.body.name);
    response.send("Message Received");
});

const PORT = 3000;

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));