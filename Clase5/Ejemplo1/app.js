// Función para cargar una página con AJAX
function loadPage(pageUrl) {
    // Usamos fetch para hacer una solicitud GET
    fetch(pageUrl)
        .then(response => {
            // Verificamos si la respuesta es exitosa
            if (!response.ok) {
                throw new Error('Error en la solicitud: ' + response.status);
            }
            // Convertimos la respuesta a texto
            return response.text();
        })
        .then(html => {
            // Insertamos el contenido HTML dentro del contenedor
            document.getElementById('contentContainer').innerHTML = html;
        })
        .catch(error => {
            // Mostramos cualquier error en la consola
            console.error('Hubo un problema al cargar la página:', error);
        });
}

// Agregamos eventos a los botones // elemento - acción - función
document.getElementById('loadPage1').addEventListener('click', function() {
    loadPage('page1.html');
});

document.getElementById('loadPage2').addEventListener('click', function() {
    loadPage('page2.html');
});

document.getElementById('loadPage3').addEventListener('click', function() {
    loadPage('page3.html');
});
