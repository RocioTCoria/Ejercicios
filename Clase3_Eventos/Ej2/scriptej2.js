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

    var scrollpantalla = document.getElementById("momentoscroll");
    var chauchaupan = document.getElementById("chauchau");

    scrollpantalla.style.display="none";
    var flag = true;
    window.addEventListener('scroll', function(){
        if (flag) {
            scrollpantalla.style.display="block";
            flag=false;
        } 
    })
    
    chauchaupan.addEventListener('click', function(){

        scrollpantalla.style.display="none";

    });
}





