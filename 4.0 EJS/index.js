import express from "express";
const app = express();

import bodyParser from "body-parser";
app.use(bodyParser.urlencoded({extended:true}));

import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

// import ejs from "ejs";

app.use(express.static("public"));

const today = new Date();
// const today = new Date("June 24, 2023 11:13:00");
const date = today.getDate();
const day = 0;

let dayName = "Weekday";
let work = "work hard!";

if(day==0 || day==6){
    dayName = "Weekend";
    work = "have fun!";
}


app.get("/", (req, res)=>{
    console.log(__dirname + "/public/views/index.html");
    const filePath = __dirname + "/public/views/index.ejs";

    const obj = {TodayDate: date, WeekName: dayName, workName: work};

    res.render(filePath, obj);
})


app.listen(3000, ()=>{
    console.log("server started on port 3000");
})