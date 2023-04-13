const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.use(express.static('public'));

io.on('connection', socket => {
  console.log('New client connected');
  socket.emit('message', 'Hello socket.io!');
})

http.listen(3000, () => console.log('server is listening on port 3000'));
