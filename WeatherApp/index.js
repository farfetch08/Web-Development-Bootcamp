const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");

const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.get("/", (req, res)=>{
    res.sendFile(__dirname + "/index.html");
})

app.post("/", (req, res)=>{
    const city = req.body.city;

    const key = "26ba5e54c981e4e56647db3c281e42b5";
    const url = "https://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric&appid=" + key;
    https.get(url, (response)=>{
        response.on("data", (d)=>{
            // console.log(d);
            const weatherData = JSON.parse(d);
            console.log(weatherData);
            const temp = weatherData.main.temp;
            res.write(`The temperature in ${city} is currently ${temp} degree celsius`);
            res.send();
        })
    })
})

app.listen(3000, ()=>{
    console.log("Server started on port 3000");
})
