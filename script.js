window.onload=function(){

    var miboton = document.getElementById("sabradios");

    miboton.addEventListener("mouseover", function(){

        miboton.style.display="none";

        setTimeout(() => {

            miboton.style.display="block"; 
        
        }, 5000);

});

}

window.onload=function(){

    var pantallacarga = document.getElementById("carga");

        pantallacarga.style.display="block";

        setTimeout (() => {

            pantallacarga.style.display="none";

        }, 1000);

    var pantallaintermedia = document.getElementById("intermedio");
    
        pantallaintermedia.style.display="none";

        setTimeout (() => {

            pantallaintermedia.style.display="block";

        }, 1000);

    var chauboton = document.getElementById("salir");
    var pantallaprincipal = document.getElementById("principal");
    chauboton.addEventListener('click', function(){

        pantallaintermedia.style.display="none";

    });

        
}



