const express = require('express');
const axios = require('axios');
const app = express();

app.set('view engine', 'ejs'); 

app.get('/', async (req, res) => {
    const kota = req.query.city;

    const apiKey = '4ff557d32d4c7e9d7826686659700542'; 
    let dataCuaca = null;

    if (kota) {
        try {

            const url = `https://api.openweathermap.org/data/2.5/weather?q=${kota}&units=metric&appid=${apiKey}`;
            const response = await axios.get(url);
            dataCuaca = response.data;
        } catch (error) {
            console.log("Alasan Error:", error.response ? error.response.data : error.message);
        }
    }

    res.render('index', { cuaca: dataCuaca });
});

app.listen(3000, () => console.log('Server jalan di http://localhost:3000'));