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



window.onload=function(){

    var contenedor = document.getElementById("contenedor");

    var titulo = document.createElement("h1");
    titulo.textContent = "¿Quién no vino a la obra?";
    titulo.classList.add("titulocss");

    contenedor.appendChild(titulo);

    for (let index = 0; index < alumnos.length; index++) {
    
        // crear un h1 o algo en java //
    
    var nombresitos = document.createElement("h2");
    nombresitos.textContent = alumnos[index].nombre;
    nombresitos.classList.add("nombrecss"); // para poder darle diseño en css
    
    var segundotitulo = document.createElement("h2");
    segundotitulo.textContent = alumnos[index].apellido;
    segundotitulo.classList.add("apellidocss");

    var section = document.createElement("section");// crea un contenedor mas chiquito
    section.classList.add("contenedorcito");

    section.appendChild(nombresitos); // nombresitos y segtitulo quedan dentro del SECTION
    section.appendChild(segundotitulo); 
    contenedor.appendChild(section); // se agrega dentro del main (en index.html)

    // alert("nombre: " + alumnos[index].nombre + " apellido: " + alumnos[index].apellido)

    var marcar = document.createElement("input");
    marcar.type="checkbox";
    marcar.classList.add("boton");
    section.appendChild(marcar);
} 

    var subir = document.createElement("button");
    subir.textContent = ":O Como que no vino :O";
    subir.type="submit";
    subir.classList.add("botoncss");

    contenedor.appendChild(subir);
}

// .length = devuelve la cantidad de elementos