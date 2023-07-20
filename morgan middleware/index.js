import express from "express";
const app = express();
const PORT = 3000;

import morgan from "morgan";
app.use(morgan("tiny"));

app.get("/", (req, res)=>{
    res.send("hello");
    console.log(res.statusCode);
})

app.listen(PORT, ()=>{
    console.log(`Server started on port ${PORT}.`);
})