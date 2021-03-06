require('dotenv').config();
const express = require('express');
const socketIO = require('socket.io');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, '../../client')));

const server = app.listen(process.env.PORT, () => console.log());
const io = socketIO(server);
const messages = [];

io.on('connection', (socket) => {
	console.log('New connection');
	socket.emit('update-message', messages);

	socket.on('new-message', (data) => {
		messages.push(data);

		io.emit('update-message', messages);
	});
});
