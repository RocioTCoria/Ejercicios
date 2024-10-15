const binId = '670ee6c5ad19ca34f8b92891';
const apiKey = '$2a$10$F0lNVxklU1fgy6.6uXvkF.V9ZQw5nYfUDSmI4zrVsuyA7iBZnRp22'; 

async function registerLibro(titulo, autor, generos, valor) {
    const url = `https://api.jsonbin.io/v3/b/${binId}/latest`;

    try {
        const response = await fetch(url, {
            headers: {
                'X-Master-Key': apiKey
            }
        });
        const data = await response.json();

        const newLibro = { "titulo": titulo, "autor": autor, "generos": generos, "valor": valor };
        data.record.push(newLibro);

        const updateResponse = await fetch(`https://api.jsonbin.io/v3/b/${binId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'X-Master-Key': apiKey
            },
            body: JSON.stringify(data.record)
        });

        if (updateResponse.ok) {
            document.getElementById('message').textContent = 'Registro exitoso. ¡Ahora puedes iniciar sesión!';
        }

    } catch (error) {
        console.error('Error al registrar:', error);
    }
}

async function loginUser(email, password) {
    const url = `https://api.jsonbin.io/v3/b/${binId}/latest`;

    try {
        const response = await fetch(url, {
            headers: {
                'X-Master-Key': apiKey
            }
        });
        const data = await response.json();

        const user = data.record.find(user => user.email === email && user.password === password);
        if (user) {
            document.getElementById('message').textContent = 'Login exitoso';
            
         
            if (user.role === 'admin') {
                window.location.href = 'admin-dashboard.html';
            } else if (user.role === 'user') {
                window.location.href = 'user-dashboard.html'; 
            }
        } else {
            document.getElementById('message').textContent = 'Credenciales incorrectas';
        }

    } catch (error) {
        console.error('Error en el login:', error);
    }
}

document.getElementById('registerLibro').addEventListener('submit', function (e) {
    e.preventDefault();
    const titulo = document.getElementById('registerTitulo').value;
    const autor = document.getElementById('registerAutor').value;
    const generos = document.getElementById('registerGeneros').value;
    const valor = document.getElementById('registerValor').value;  
    registerLibro(titulo, autor, generos, valor);
});

document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    loginUser(email, password);
});
