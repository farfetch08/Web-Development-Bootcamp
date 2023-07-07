// import fs from "fs";
const fs = require("fs");

fs.writeFile("new.txt", "hello NodeJs", (error)=>{
    if(error) throw error;
    console.log("This is executed");
})

fs.readFile("./message.txt", "utf8",(err, data)=>{
    if(err) throw err;
    console.log(data);
})

fs.readFile("new.txt", "utf-8", (err, data)=>{
    if(err) throw err;
    console.log(data);
})
