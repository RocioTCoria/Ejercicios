fetch('https://dog.ceo/api/breeds/image/random')
  .then(response => response.json())
  .then(data => {
    var marco = document.getElementById("foto");
    var imagen = document.createElement("img") ;
    imagen.src = data.message;
    marco.appendChild(imagen);})
  .catch(error => console.error('Error:', error));


 