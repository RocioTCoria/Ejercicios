var alumnos = [{

    "nombre":"Rocio",
    "apellido":"Coria"
},{

    "nombre":"Uriel",
    "apellido":"Verdú"
},{

    "nombre":"Milagros",
    "apellido":"Coria"
},{

    "nombre":"Sheila",
    "apellido":"Verdú"
},{

    "nombre":"Cayetano",
    "apellido":"Rubio"
},{

    "nombre":"Rosa",
    "apellido":"Zarate"
},{

    "nombre":"Miguel",
    "apellido":"Coria"
}
]

// .length = devuelve la cantidad de elementos

function mostrarAlumnos() {

    var contenedor = document.getElementById("contenedor");
    
    contenedor.innerHTML = ''; // Limpiar el contenido del contenedor antes de volver a mostrar la lista

    // Crear el título
    var titulo = document.createElement("h1");
    titulo.textContent = "¿Quién no vino a la obra?";
    titulo.classList.add("titulocss");
    contenedor.appendChild(titulo);

    // Mostrar cada alumno en el array
    alumnos.forEach((alumno) => {

        var section = document.createElement("section");
        section.classList.add("contenedorcito");

        var nombre = document.createElement("h2");
        nombre.textContent = alumno.nombre;
        nombre.classList.add("nombrecss");

        var apellido = document.createElement("h2");
        apellido.textContent = alumno.apellido;
        apellido.classList.add("apellidocss");

        section.appendChild(nombre);
        section.appendChild(apellido);

        // Checkbox para marcar si no asistió
        var marcar = document.createElement("input");
        marcar.type = "checkbox";
        marcar.classList.add("boton");
        section.appendChild(marcar);

        contenedor.appendChild(section);

    });

    var subir = document.createElement("button");
    subir.textContent = ":O Como que no vino :O";
    subir.type="submit";
    subir.classList.add("botoncss");

    contenedor.appendChild(subir);
}

// Función para agregar un nuevo alumno
function agregarAlumno(event) {
    event.preventDefault(); // Evita que la página se recargue

    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;

    // Agregar el nuevo alumno al array
    alumnos.push({
        nombre: nombre,
        apellido: apellido
    });

    // Mostrar la lista actualizada
    mostrarAlumnos();

    // Limpiar el formulario
    document.getElementById('formulario').reset();
}



// Función para validar calificaciones
function validarCalificacion(calificacion) {
    return calificacion >= 1 && calificacion <= 10;
}

// Función para calcular el promedio
function calcularPromedio(calificaciones) {
    var total = calificaciones.reduce((sum, calificacion) => sum + calificacion, 0);
    return total / calificaciones.length;
}

// Función para agregar un nuevo alumno
function agregarAlumno(event) {
    event.preventDefault(); // Evita que la página se recargue

    // Obtener los valores del formulario
    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
    var calificacion1 = parseFloat(document.getElementById('calificacion1').value);
    var calificacion2 = parseFloat(document.getElementById('calificacion2').value);
    var calificacion3 = parseFloat(document.getElementById('calificacion3').value);
    var errorMsg = document.getElementById('error-msg');

    // Calcular el promedio del alumno
    var promedio = calcularPromedio([calificacion1, calificacion2, calificacion3]);

    // Agregar el nuevo alumno al array
    alumnos.push({
        nombre: nombre,
        apellido: apellido,
        promedio: promedio
    });

    // Mostrar la lista actualizada
    mostrarAlumnos();

    // Limpiar el formulario y el mensaje de error
    document.getElementById('formulario').reset();
    errorMsg.textContent = '';
}

// Ejecutar una vez que la página haya cargado
window.onload = function() {
    // Mostrar los alumnos existentes
    mostrarAlumnos();

    // Agregar el evento submit al formulario para agregar nuevos alumnos
    var formulario = document.getElementById('formulario');
    formulario.addEventListener('submit', agregarAlumno);
}