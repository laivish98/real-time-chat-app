const express = require('express');
const http = require('http');
const cors = require('cors');
const { Server } = require('socket.io');

const app = express();

// ✅ Enable CORS for all origins
app.use(cors());

const server = http.createServer(app);

// ✅ Configure Socket.IO with CORS
const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  },
});

// ✅ Handle socket connections
io.on('connection', (socket) => {
  console.log(`✅ User connected: ${socket.id}`);

  // Log received messages and broadcast
  socket.on('send_message', (data) => {
    console.log('📨 Message received:', data);
    io.emit('receive_message', data);
  });

  socket.on('disconnect', () => {
    console.log(`❌ User disconnected: ${socket.id}`);
  });
});

// ✅ Listen on all interfaces so other devices can connect
const PORT = 3001;
server.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Server running at http://0.0.0.0:${PORT}`);
});
