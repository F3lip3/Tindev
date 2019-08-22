const http = require('http');
const express = require('express');
const socketIo = require('socket.io');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const app = express();
const server = http.Server(app);
const io = socketIo(server);
const connectedUsers = {};

io.on('connection', (socket) => {
    const { user } = socket.handshake.query;
    connectedUsers[user] = socket.id;
});

mongoose.connect('mongodb://localhost:27017/tindev', {
    useNewUrlParser: true
});

app.use((req, res, next) => {
    req.io = io;
    req.connectedUsers = connectedUsers;
    return next();
});

app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(5000);
