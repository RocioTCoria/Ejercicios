// Ejercicio 1

function validar() {

    var apellidoescrito = document.getElementById ("apellido").value;
    
    var formulario = document.getElementById ("formulario").value;
    
    if (apellidoescrito.length<1) {

        alert("escriba un apellido valido");

    } else {

        formulario.submit();
    }
    
    
}

  // Ejercicio 2

function quieroesto() {
    
    var comidaqquiero = document.getElementById ("comida").value;
    
    var formulario = document.getElementById ("formulario1").value;
    
    if (comidaqquiero == "Pizza") {

        alert(comidaqquiero + " tiene un 50% de descuento");

    } if (comidaqquiero == "Pancho") {

        alert(comidaqquiero + " tiene un 20% de descuento");

    }  if (comidaqquiero == "Tarta de atún") {

        alert(comidaqquiero + " tiene un 12% de descuento");

    } if (comidaqquiero == "Milanesa") {

        alert(comidaqquiero + " tiene un 8% de descuento");

    }
    
    else {

        formulario.submit();

    }
}

  // Ejercicio 3

function mifecha() {
    
    var fechapuesta = document.getElementById ("fecha").value;
    
    var formulario = document.getElementById ("formulario2").value;
    
    var fechadehoy = new Date();
    
    var fechaformateada = new Date(fechapuesta);
    
    if (fechadehoy>fechaformateada) {

        alert("Esta fecha ya pasó");

    } else {

        alert("La fecha puesta aun no ocurrio");
    }
}