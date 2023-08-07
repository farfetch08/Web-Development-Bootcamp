const PORT = 3000;

import express from "express";
const app = express();

import bodyParser from "body-parser";
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", (req, res)=>{
    res.render("index.ejs");
})

app.post("/", (req, res)=>{
    const fname = req.body.fname;
    const lname = req.body.lname;
    const lettersSum = fname.length + lname.length;
    const obj = {
        fname: req.body["fname"],
        lname: req.body["lname"],
        lettersCount: lettersSum
    }
    // console.log(fname);
    res.render("index.ejs", obj);
})

app.listen(PORT, ()=>{
    console.log(`Server started on PORT ${PORT}.`);
})