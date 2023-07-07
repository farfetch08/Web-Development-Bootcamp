
// const superHero = require("superhero-name-library");

import supers from "superhero-name-library";

console.log(`I am ${supers.random()}!`);

let randNum = Math.floor(Math.random()*3)+1;
let randNum2 = Math.floor(Math.random()*5)+1;

console.log(`${supers.allNames(randNum)} ---Vs--- ${supers.allNames(randNum2)}`);