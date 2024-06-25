document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var port_in_message = document.getElementById('port_in_message');

    if (username === 'admin' && password === 'password123') {
        port_in_message.style.color = 'green';
        port_in_message.textContent = 'Login successful!';
    } else {
        port_in_message.style.color = 'red';
        port_in_message.textContent = 'Invalid username or password!';
    }
});
