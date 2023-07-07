
import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
.prompt([
        /* Pass your questions in here */
        {
            name: "url",
            message: "Enter your url: "
        }
    ])
    .then((answers) => {
        // Use user feedback for... whatever!!
        console.log(answers.url);
        let URL = answers.url;
        var qr_svg = qr.image(URL, { type: 'png' });
        qr_svg.pipe(fs.createWriteStream('qr.png'));
        fs.writeFile("url.txt", URL, (err)=>{
            if(err) throw err;
            console.log("no error");
        })
    })
    .catch((error) => {
        if (error.isTtyError) {
            console.log(`Prompt couldn't be rendered in the current environment`);
        } else {
            console.log(`Something else went wrong`);
        }
    });
    
    /* 
    1. Use the inquirer npm package to get user input.
    2. Use the qr-image npm package to turn the user entered URL into a QR code image.
    3. Create a txt file to save the user input using the native fs node module.
    */