document.getElementById('registerForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const email = document.getElementById('email').value;

    fetch('https://fakestoreapi.com/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: username,
            password: password,
            email: email
        })
    })
        .then(res => res.json())
        .then(data => {
            console.log('Success:', data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
});

document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("name").value;
    const password = document.getElementById("password").value;
    const email = document.getElementById("email").value;

    if (username && password && email) {
        document.getElementById("message").textContent = "Ro'yxatdan o'tdingiz!";
        document.getElementById("loginForm").reset();
    } else {
        document.getElementById("message").textContent = "Iltimos, barcha maydonlarni to'ldiring!";
    }
});




