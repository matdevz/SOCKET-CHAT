const socket = io('http://localhost:3001');
const btnSendMessage = document.getElementById('btnSendMessage');
const formMessage = document.getElementById('formMessage');

btnSendMessage.addEventListener('click', () => {
	socket.emit('new-message', { msg: formMessage.value });

	formMessage.value = '';
});

socket.on('update-message', (messages) => {
	updateMessagesOnScreen(messages);
});

const updateMessagesOnScreen = (messages) => {
	const containerMessages = document.querySelector('#messages');
	const ul = document.createElement('ul');

	messages.forEach((message) => {
		const li = document.createElement('li');

		li.innerText = message;
		ul.appendChild(li);
	});
	containerMessages.appendChild(ul);
};
