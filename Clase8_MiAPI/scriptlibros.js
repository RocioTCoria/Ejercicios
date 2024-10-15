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

    } catch (error) {
        console.error('Error fetching data', error);
    }

}


