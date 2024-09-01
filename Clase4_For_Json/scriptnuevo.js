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

for (let index = 0; index < alumnos.length; index++) {
    
    alert("nombre: " + alumnos[index].nombre + " apellido: " + alumnos[index].apellido)
}

// .length = devuelve la cantidad de elementos