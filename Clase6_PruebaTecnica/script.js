var productos = [{

    "id":"0",
    "nombre":"Chocolate",
    "precio":"1000",
    "cantidad":"$5"
},{

    "id":"1",
    "nombre":"Bombon",
    "precio":"500",
    "cantidad":"$1,5"
},{

    "id":"3",
    "nombre":"Gomitas de Ositos",
    "precio":"800",
    "cantidad":"$12"
},{

    "id":"4",
    "nombre":"Caramelitos de banana",
    "precio":"150",
    "cantidad":"$80"
}
]

window.onload = function() {
    
    MostrarProducto();
    var formulario = document.getElementById('formulario');
    formulario.addEventListener('submit', AgregarProducto);
    
function MostrarProducto () {

    var infoprin = document.getElementById("Infoprincipal");

    infoprin.innerHTML = ''; 

    productos.forEach((producto) => {

        var section = document.createElement("section");
        section.classList.add("contenedorcito");

        var nombre = document.createElement("h2");
        nombre.textContent = producto.nombre;
        nombre.classList.add("nombrecss");

        var precio = document.createElement("h2");
        precio.textContent = producto.precio;
        precio.classList.add("preciocss");

        var cantidad = document.createElement("h2");
        cantidad.textContent = producto.precio;
        cantidad.classList.add("cantidadcss");

        section.appendChild(nombre);
        section.appendChild(precio);
        section.appendChild(cantidad);

        infoprin.appendChild(section);

    });
}

function AgregarProducto (event) { 
    event.preventDefault(); 

    var nombre = document.getElementById('nombre').value;
    var precio = document.getElementById('precio').value;
    var cantidad = document.getElementById('cantidad').value;
    
    alumnos.push({

        nombre: nombre,
        precio: precio,
        cantidad: cantidad,
    });

    
    MostrarProducto();

    document.getElementById('formulario').reset();
}

}