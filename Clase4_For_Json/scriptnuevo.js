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
}
]



window.onload=function(){

    var contenedor = document.getElementById("contenedor");

    for (let index = 0; index < alumnos.length; index++) {
    // crear un h1 o algo en java //
    var titulo = document.createElement("h1");
    titulo.textContent = alumnos[index].nombre;
    titulo.classList.add("nombrecss"); // para poder darle diseño en css
    
    var segundotitulo = document.createElement("h2");
    segundotitulo.textContent = alumnos[index].apellido;
    segundotitulo.classList.add("apellidocss");

    var section = document.createElement("section");// crea un contenedor mas chiquito
    section.classList.add("contenedorcito");

    section.appendChild(titulo); // titulo y segtitulo quedan dentro del SECTION
    section.appendChild(segundotitulo); 
    contenedor.appendChild(section); // se agrega dentro del main (en index.html)

    // alert("nombre: " + alumnos[index].nombre + " apellido: " + alumnos[index].apellido)

    var marcar = document.createElement("input");
    marcar.type="checkbox";
    section.appendChild(marcar);
} 
}

// .length = devuelve la cantidad de elementos