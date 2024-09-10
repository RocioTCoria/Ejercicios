// Función para cargar los usuarios desde el archivo JSON
function loadUsers() {
    fetch('users.json')  // Hacemos la solicitud al archivo JSON
        .then(response => response.json())  // Convertimos la respuesta en JSON
        .then(users => {
            const userList = document.getElementById('userList');
            userList.innerHTML = '';  // Limpiamos la lista antes de mostrar los usuarios

            // Recorremos los usuarios y los añadimos a la lista
            users.forEach(user => {
                const li = document.createElement('li');
                li.textContent = user.name;
                li.dataset.id = user.id;
                li.addEventListener('click', () => showUserDetails(user));  // Agregamos el evento click para mostrar los detalles
                userList.appendChild(li);
            });
        })
        .catch(error => console.error('Error al cargar usuarios:', error));
}



// Función para mostrar los detalles de un usuario
function showUserDetails(user) {
    document.querySelector('#userName span').textContent = user.name;
    document.querySelector('#userEmail span').textContent = user.email;
    document.querySelector('#userPhone span').textContent = user.phone;
}

// Agregamos el evento al botón para cargar los usuarios
document.getElementById('loadUsersBtn').addEventListener('click', loadUsers);


function cargarNuevo() {
    fetch('profesor.json')  
        .then(response => response.json())
        .then(users => {
            const userList = document.getElementById('userList');
            userList.innerHTML = '';

            users.forEach(user => {
                const li = document.createElement('li');
                li.textContent = user.name;
                li.dataset.id = user.id;
                li.addEventListener('click', () => showUserDetails1(user));
                userList.appendChild(li);
            });
        })
        .catch(error => console.error('Error al cargar usuarios:', error));
}

function showUserDetails1(user) {
    document.querySelector('#userName1 span').textContent = user.name;
    document.querySelector('#userEmail1 span').textContent = user.email;
    document.querySelector('#userPhone1 span').textContent = user.phone;
}

document.getElementById('cargarprofe').addEventListener('click', cargarNuevo);