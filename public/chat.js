const socket = io();

const usernameForm = document.getElementById('username-form');
const usernameInput = document.getElementById('username');
const form = document.getElementById('form');
const input = document.getElementById('input');
const messages = document.getElementById('messages');

usernameForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (usernameInput.value) {
        socket.emit('set username', usernameInput.value);
        usernameInput.style.display = 'none';
        usernameForm.style.display = 'none';
    }
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (input.value) {
        socket.emit('chat message', input.value);
        input.value = '';
    }
});

socket.on('chat message', (data) => {
    const item = document.createElement('li');
    item.textContent = `${data.username || 'Anonymous'}: ${data.msg}`;
    item.style.color = data.color; // Set the text color to the user's color
    messages.appendChild(item);
    window.scrollTo(0, document.body.scrollHeight);
});
