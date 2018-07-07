const app = require('express')();
const http = require('http').Server(app);
const path = require('path');
const io = require('socket.io')(http);


app.get('/', (req, res)=>{
  res.sendFile(path.join(__dirname, '/index.html'));
});

io.on('connection', (socket) => {
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});

http.listen(3000, () => {
  console.log("Server is listening to port 3000");
})