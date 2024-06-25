// public/main.js
const socket = io();

const form = document.getElementById('form');
const input = document.getElementById('input');
const messages = document.getElementById('messages');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    if (input.value) {
        socket.emit('chat message', input.value);
        input.value = '';
    }
});

document.getElementById('fileInput').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const img = document.getElementById('uploadedImage');
            img.src = e.target.result;
            img.style.display = 'block';
        };
        reader.readAsDataURL(file);
    }
});

         


socket.on('chat message', function(msg) {
    const item = document.createElement('li');
    const portal_opt = document.getElementById('portal_opt');
    item.innerHTML =  `<p style=" color: var(--gray-700);">Undefined</p>`+ `<div class="msg">${msg}</div>`  ;
    messages.appendChild(item);
    window.scrollTo(0, document.body.messages.scrollHeight);
});


document.querySelectorAll('.portal_opt_btn').forEach(button => {
    button.addEventListener('click', function() {
        document.getElementById('emoji_gif').style.display ='block';

    });
});

