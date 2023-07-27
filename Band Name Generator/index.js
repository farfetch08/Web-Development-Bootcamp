import express from "express";
const app = express();

import bodyParser from "body-parser";
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static("public"))

app.get('/', (req, res)=>{
    res.sendFile(__dirname + "/public/index.html");
})

app.post('/', (req, res)=>{
    const city = req.body.city;
    const pet = req.body.pet;
    res.write("<h1>Your Band Name is: "+ city+pet+"</h1>");
    res.send();
})

app.listen(3000, ()=>{
    console.log("server started on port 3000");
})