const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.static(__dirname + '/public'));

const users = {};

io.on('connection', (socket) => {
    console.log('a user connected');
    
    // Assign a random color to the user
    const color = '#' + Math.floor(Math.random() * 16777215).toString(16);
    users[socket.id] = { color, username: '' };

    socket.on('set username', (username) => {
        users[socket.id].username = username;
        console.log(`Username set for ${socket.id}: ${username}`);
    });

    socket.on('chat message', (msg) => {
        const user = users[socket.id];
        if (user) {
            io.emit('chat message', { msg, color: user.color, username: user.username || 'Anonymous' });
        }
    });

    socket.on('disconnect', () => {
        console.log('user disconnected');
        delete users[socket.id];
    });
});

server.listen(3000, () => {
    console.log('listening on *:3000');
});
