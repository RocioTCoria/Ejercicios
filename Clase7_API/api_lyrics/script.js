fetch('https://api.lyrics.ovh/v1/Daddy Yankee/Gasolina')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
