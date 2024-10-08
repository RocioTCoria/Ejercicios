fetch('https://randomuser.me/api/')
  .then(response => response.json())
  .then(data => {
    const user = data.results[0];
    const { email, cell, name, login, picture, location } = user;
    console.log(data);
    // Mostrar datos en el div
    const datosDiv = document.getElementById('datos');
    datosDiv.innerHTML = `
      <p>Email: ${email}</p>
      <p>Teléfono: ${cell}</p>
      <p>Nombre: ${name.title} ${name.first} ${name.last}</p>
      <p>Dirección: ${location.street.number} ${location.street.name}, ${location.city}, ${location.state}, ${location.country}</p>
    `;

    // Mostrar username y thumbnail
    document.getElementById('usuario').innerText = login.username;
    document.getElementById('thumnail').innerHTML = `<img src="${picture.thumbnail}" alt="Thumbnail">`;
  })
  .catch(error => console.error('Error:', error));
