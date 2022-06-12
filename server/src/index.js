require('dotenv').config();
const express = require('express');
const socketIO = require('socket.io');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, '../../client')));

app.get('/chats', (req, res) => {
	res.send('My chat ');
});
const server = app.listen(process.env.PORT, () => console.log());

const io = socketIO(server);
