function register() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username && password) {
        const userDetails = {
            username: username,
            password: password
        };

        localStorage.setItem('user', JSON.stringify(userDetails));
        console.log('Registered user:', userDetails);
        alert('Registration successful! Please login.');
        window.location.href = "login.html";
    } else {
        alert('Please fill out all fields.');
    }
}

function login() {
    const loginUsername = document.getElementById('login-username').value;
    const loginPassword = document.getElementById('login-password').value;

    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedUser && storedUser.username === loginUsername && storedUser.password === loginPassword) {
        console.log('Logged in user:', storedUser);
        localStorage.setItem('loggedInUser', JSON.stringify(storedUser));
        window.location.href = "home.html"; 
    } else {
        alert('Invalid username or password.');
    }
}

window.onload = function() {
    const logged = JSON.parse(localStorage.getItem('loggedInUser'));
    if (logged) {
        document.getElementById('user-details').innerText = `Welcome, ${logged.username}!`;
    }
};

function logout() {
    localStorage.removeItem('loggedInUser'); 
    window.location.href = "login.html"; 
}
