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
    
    contenedor.innerHTML = ''; // Limpia el contenido de "contenedor" antes de volver a mostrar la lista para que no se duplique el contenido

    // Crea el título (manera de crear un elemento)
    var titulo = document.createElement("h1");
    titulo.textContent = "¿Quién no vino a la obra?";
    titulo.classList.add("titulocss");
    contenedor.appendChild(titulo);

    // Muestra cada alumno en el array. Se recorre el "array alumnos" usando forEach, lo que significa que la función de adentro se ejecuta una vez por cada alumno en el array
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



// AGREGAR UN NUEVO ALUMNO
function agregarAlumno(event) { // "event" se refiere a cuando se envia el formulario, ya que cuando ocurre, sucede el evento de agregar a la nueva persona.
    event.preventDefault(); // Evita que la página se recargue

    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;

    // Agrega el nuevo alumno al array
    alumnos.push({
        nombre: nombre,
        apellido: apellido
    });

    // Se llama a la función mostrarAlumnos() para que actualice la lista y muestre al nuevo alumno
    mostrarAlumnos();

    // Que los espacios de los inputs queden limpitos
    document.getElementById('formulario').reset();
}



// VALIDAR CALIFICACIONES (APROBADO ENTRA, DESAPROBADO NO)
function validarCalificacion(calificacion) { // "calificacion" es un parametro que se intercambia por los valores indicados debajo
    return calificacion >= 1 && calificacion <= 10; // que la nota de la calificacion debe estar entre 1 y 10
}



// CALCULAR PROMEDIO
function calcularPromedio(calificaciones) { // "calificaciones" es un parametro que se supone que sea un array de numeros
    var total = calificaciones.reduce((sum, calificacion) => sum + calificacion, 0); // "sum" suma total de las calificaciones // "calificacion" Es el valor actual del array de calificaciones en cada iteración
    return total / calificaciones.length; // "total" es la suma de las calificaciones dividido la cantidad de elementos (.length)
}

// ".reduce" es un método de arrays en JavaScript que recorre todos los elementos del array y los reduce a un solo valor. // el "0" es el punto de partida de "sum", o sea su valor inicial



// AGREGAR UN NUEVO ALUMNO EN FUNCION DEL PROMEDIO
function agregarAlumno(event) {
    event.preventDefault();

    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
    var calificacion1 = parseFloat(document.getElementById('calificacion1').value); // parseFloat(): el valor, que inicialmente es tratado como texto "7,50", se transforma en un valor numérico que puede incluir decimales: 7,50. 
    var calificacion2 = parseFloat(document.getElementById('calificacion2').value);
    var calificacion3 = parseFloat(document.getElementById('calificacion3').value);

    // Valida que el nombre y apellido no este vacío
    if (nombre.trim() === '' || apellido.trim() === '') {
        return; // Si el nombre o apellido estan vacíos, no se agrega
    }
    
    // Valida que las calificaciones no esten vacias
    if (!validarCalificacion(calificacion1) || !validarCalificacion(calificacion2) || !validarCalificacion(calificacion3)) {
        return; 
    }

    // Calcula el promedio del alumno
    var promedio = calcularPromedio([calificacion1, calificacion2, calificacion3]);

    // Solo agrega si el promedio es mayor o igual a 6 (alumno aprobado)
    if (promedio >= 6) {

        alumnos.push({
            nombre: nombre,
            apellido: apellido,
            promedio: promedio
        });

        // Muestra la lista actualizada con el nuevo alumno aprobado
        mostrarAlumnos();
    }

    document.getElementById('formulario').reset();
}

// Ejecuta una vez que la página haya cargado
window.onload = function() {
    
    mostrarAlumnos(); // Muestra los alumnos
    var formulario = document.getElementById('formulario');
    formulario.addEventListener('submit', agregarAlumno);
}