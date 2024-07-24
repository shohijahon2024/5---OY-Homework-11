async function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const response = await fetch('https://fakestoreapi.com/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: username,
            password: password
        })
    });

    const data = await response.json();
    console.log('Login Response:', data);
}

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if(username && password) {
        alert('Login qilindingiz');
    } else {
        alert('Iltimos, foydalanuvchi nomi va parolni kiritib qayta urinib ko\'ring.');
    }
}); 

