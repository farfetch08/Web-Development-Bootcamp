import express from "express";
const app = express();

function logger(req, res, next){
    console.log(req.method);
    console.log(req.url);
    next();
}

app.use(logger);

app.get("/", (req, res)=>{
    res.send("hello");
})

app.get("/about", (req, res)=>{
    res.send("About Page");
    // console.log(req.url);
})

app.listen(3000, ()=>{
    console.log("server started on port 3000");
})