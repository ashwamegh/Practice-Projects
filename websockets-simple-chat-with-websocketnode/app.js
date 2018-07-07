process.title = 'node-chat';

const WebSocketServer = require('websocket').server;
const http = require('http');
const wsPort = 1337;

/**
 * Global Variables
 */
// Latest messages count upto 100
let history = [];

// latest connected clients count
let clients = [];

/**
 * Helper function for escaping input strings
 */
function htmlEntities(str) {
  return String(str)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;')
      .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

// Array with some colors
var colors = [ 'red', 'green', 'blue', 'magenta', 'purple', 'plum', 'orange' ];
// ... in random order
colors.sort(function(a,b) { return Math.random() > 0.5; } );


const server = http.createServer((request, response) => {

})

server.listen(wsPort, () => {
  console.log(new Date() + "Server has been started on port: "+wsPort);
});

// Creates the server 

wsServer = new WebSocketServer({
  // WebSocket server is tied to a HTTP server. WebSocket
  // request is just an enhanced HTTP request. For more info 
  // http://tools.ietf.org/html/rfc6455#page-6

  httpServer: server 
});

// Create the WebSocket Server

wsServer.on('request', (request) => {
  console.log((new Date()) + ' Connection from origin '
  + request.origin + '.');

// accept connection - you should check 'request.origin' to
// make sure that client is connecting from your website
// (http://en.wikipedia.org/wiki/Same_origin_policy)

  const connection = request.accept(null, request.origin);

  let index = clients.push(connection) - 1;
  let userName = false;
  let userColor = false;

  console.log((new Date()) + ' Connection accepted.');

  // send back chat history
  if (history.length > 0) {
    connection.sendUTF(
        JSON.stringify({ type: 'history', data: history} ));
  }

  // ** Callback to handle users messages to the server
  // user sent some message
  connection.on('message', function(message) {
    if (message.type === 'utf8') { // accept only text
    // first message sent by user is their name
     if (userName === false) {
        // remember user name
        userName = htmlEntities(message.utf8Data);
        // get random color and send it back to the user
        userColor = colors.shift();
        connection.sendUTF(
            JSON.stringify({ type:'color', data: userColor }));
        console.log((new Date()) + ' User is known as: ' + userName
                    + ' with ' + userColor + ' color.');
      } else { // log and broadcast the message
        console.log((new Date()) + ' Received Message from '
                    + userName + ': ' + message.utf8Data);
        
        // we want to keep history of all sent messages
        var obj = {
          time: (new Date()).getTime(),
          text: htmlEntities(message.utf8Data),
          author: userName,
          color: userColor
        };
        history.push(obj);
        history = history.slice(-100);
        // broadcast message to all connected clients
        var json = JSON.stringify({ type:'message', data: obj });
        for (var i=0; i < clients.length; i++) {
          clients[i].sendUTF(json);
        }
      }
    }
  });
  // user disconnected
  connection.on('close', function(connection) {
    if (userName !== false && userColor !== false) {
      console.log((new Date()) + " Peer "
          + connection.remoteAddress + " disconnected.");
      // remove user from the list of connected clients
      clients.splice(index, 1);
      // push back user's color to be reused by another user
      colors.push(userColor);
    }
  });
});