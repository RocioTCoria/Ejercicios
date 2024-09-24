var productos = [{

    "id":"0",
    "nombre":"Chocolate",
    "precio":"1000",
    "cantidad":"5"
},{

    "id":"1",
    "nombre":"Bombon",
    "precio":"500",
    "cantidad":"1"
},{

    "id":"3",
    "nombre":"Gomitas de Ositos",
    "precio":"800",
    "cantidad":"12"
},{

    "id":"4",
    "nombre":"Caramelitos de banana",
    "precio":"150",
    "cantidad":"80"
}
]

function AgregarProducto () {

    var infoprin = document.getElementById("Infoprincipal");

    contenedor.innerHTML = ''; 

    var titulo = document.createElement("h1");
    titulo.textContent = "Agregue un nuevo producto";
    titulo.classList.add("titulocss");
    contenedor.appendChild(titulo);

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

        contenedor.appendChild(section);

    });
}