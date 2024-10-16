const binId = '670eea88ad19ca34f8b92b32';
const apiKey = '$2a$10$F0lNVxklU1fgy6.6uXvkF.V9ZQw5nYfUDSmI4zrVsuyA7iBZnRp22'; 

window.onload = async function() {
    const url = `https://api.jsonbin.io/v3/b/${binId}/latest`;

    try {
        const response = await fetch(url, {
            headers: {
                'X-Master-Key': apiKey
            }
        });

        if (!response.ok) {
            throw new Error('Network response was not ok' + response.statusText);
        }
       
        const data = await response.json();
        console.log(data.record);

        const listaLibros = document.getElementById("lista");
        for (let index = 0; index < data.record.length; index++) {

            var titulo = document.createElement("h2");
            titulo.textContent = data.record[index].titulo;
            listaLibros.append(titulo);
            titulo.classList.add("titulo");

            var autor = document.createElement("h3");
            autor.textContent = data.record[index].autor;
            listaLibros.append(autor);
            autor.classList.add("autor");

            var generos = document.createElement("h4");
            generos.textContent = "Género: " + data.record[index].generos;
            listaLibros.append(generos);
            generos.classList.add("genero");

            var valor = document.createElement("h3");
            valor.textContent = "$" + data.record[index].valor;
            listaLibros.append(valor);
            valor.classList.add("valor");

            var boton = document.createElement("button");
            boton.textContent = "Comprar";
            listaLibros.append(boton);
            boton.classList.add("boton");
            boton.addEventListener('click', function() {
                alert("Compra realizada. ¡Disfruta tu libro!");
        });
            var section = document.createElement("section");
            section.classList.add("contenedorcito");

            section.appendChild(titulo);
            section.appendChild(autor);
            section.appendChild(generos);
            section.appendChild(valor);
            section.appendChild(boton);

            listaLibros.append(section);
        }

    } catch (error) {
        console.error('Error fetching data', error);
    }

    
    
}


