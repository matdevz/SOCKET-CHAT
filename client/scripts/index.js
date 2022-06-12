const socket = io('http://localhost:3001');
const btnSendMessage = document.getElementById('btnSendMessage');
const formMessage = document.getElementById('formMessage');
const formName = document.getElementById('formName');

btnSendMessage.addEventListener('click', () => {
	if (formMessage.value === '') {
		alert('Insira uma menssagem');
	} else if (formName.value === '') {
		alert('Insira um nome');
	} else {
		socket.emit('new-message', {
			name: formName.value,
			msg: formMessage.value,
		});
	}
	formName.value = '';
	formMessage.value = '';
});

socket.on('update-message', (messages) => {
	updateMessagesOnScreen(messages);
});

const updateMessagesOnScreen = (messages) => {
	const containerMessages = document.querySelector('#messages');
	const ul = document.createElement('ul');
	containerMessages.innerText = '';

	messages.forEach((message) => {
		const li = document.createElement('li');

		li.innerText = `${message.name}: ${message.msg}`;
		ul.appendChild(li);
	});
	containerMessages.appendChild(ul);
};
