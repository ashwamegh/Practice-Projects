
window.onload = function() {

  // Get references to elements on the page.
  const form = document.getElementById('message-form');
  const messageField = document.getElementById('message');
  const messagesList = document.getElementById('messages');
  const socketStatus = document.getElementById('status');
  const closeBtn = document.getElementById('close');

  // The rest of the code in this tutorial will go here...
  const socket = new WebSocket('wss://echo.websocket.org');

  socket.onopen = (event) => {
  	socketStatus.innerHTML = "Connected to: "+event.currentTarget.url ;
  	socketStatus.className = 'open';
  }

  socket.onerror = (error) => {
  	console.log('WebSocket Error: '+error);
  }

  form.onsubmit = (event) => {
  	event.preventDefault();

  	const message = messageField.value;
  	socket.send(message);

  	// Adds sent message to the ui
  	messagesList.innerHTML += '<li class="sent"><span>Sent:</span>' + message +'</li>';

  	// wipe out message values
  	messageField.value = '';
  	return false;
  }

  socket.onmessage = (event) => {
  	const message = event.data;
  	messagesList.innerHTML += '<li class="received"><span>Received:</span>' + message +'</li>';
  }

  socket.onclose = function(event) {
	  socketStatus.innerHTML = 'Disconnected from WebSocket.';
	  socketStatus.className = 'closed';
	};

	closeBtn.onclick = function(e) {
	  e.preventDefault();

	  // Close the WebSocket.
	  socket.close();

	  return false;
	};
};