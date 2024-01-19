const express = require('express');
const cors = require('cors');
const http = require('http');
const {Server} = require('socket.io');

const dbConnect = require('./db/dbConnect')
const chalk = require('chalk');
const { login,register } = require('./functions/user_functions');

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => res.status(200).send("Hello World!"));

dbConnect()

app.post("/register", register);
app.post("/login", login);
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
      origin: "http://localhost:5173"
    }
});

// Use the cors middleware to allow all origins

// Socket.IO connection handling
io.on('connection', (socket) => {
  console.log(socket.id);
  console.log('A user connected');

  // Send a message to the client when a new user connects
  console.log(socket.emit('messageFromServer', 'Welcome to the server!'));


  socket.on('codeChange', (code) => {
    socket.broadcast.emit('codeChange',code);
  });

});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
