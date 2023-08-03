import express from "express";
const app = express();
const PORT = 3000;

app.get("/", (req, res)=>{
    // res.send("Hello");
    const data = {
        title: "EJS Tags",
        seconds: new Date().getSeconds(),
        items: ["apple", "banana", "cherry"],
        htmlContent: "<em>This is some em text</em>"
    };
    res.render("index.ejs", data);
})

app.listen(PORT, ()=>{
    console.log(`Server started on port ${PORT}.`);
})