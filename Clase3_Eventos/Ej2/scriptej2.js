  // Ejercicio 2

window.onload=function(){

    var pantallaenmedio = document.getElementById("sacar");
    var chaupantalla = document.getElementById("chaumedio");

    pantallaenmedio.style.display="none";

        setTimeout (() => {

            pantallaenmedio.style.display="block";

        }, 10000);

    chaupantalla.addEventListener('click', function(){

        pantallaenmedio.style.display="none";

    });

        

    // Ejercicio 3


}





