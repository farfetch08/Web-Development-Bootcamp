//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

import express from "express";
const app = express();

import bodyParser from "body-parser";
app.use(bodyParser.urlencoded({extended:true}));

import {dirname} from "path";
import {fileURLToPath} from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(express.static("public"));


app.get("/", (req, res)=>{
    res.sendFile(__dirname + "/public/index.html");
})

app.post("/check", (req, res)=>{
    console.log(req.body);
    const password = req.body.password;
    
    if(password==="ILoveProgramming"){
        res.sendFile(__dirname + "/public/secret.html");
    }
    else{
        // res.sendFile(__dirname + "/public/index.html");
        res.redirect("/");
    }
    // req.body.
})

app.listen(3000, ()=>{
    console.log("server started on port 3000");
})
