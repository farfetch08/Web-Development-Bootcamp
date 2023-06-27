
let random1 = Math.floor(Math.random()*6)+1;
let random2 = Math.floor(Math.random()*6)+1;

let dice1String = "";
// for dice 1
switch(random1){
    case 1: dice1String = "one";
    break;
    case 2: dice1String = "two";
    break;
    case 3: dice1String = "three";
    break;
    case 4: dice1String = "four";
    break;
    case 5: dice1String = "five";
    break;
    case 6: dice1String = "six";
    break;
    default: console.log("Invalid dice number!");
}
console.log(dice1String);

let dice2String = "";
// for dice 2
switch(random2){
    case 1: dice2String = "one";
    break;
    case 2: dice2String = "two";
    break;
    case 3: dice2String = "three";
    break;
    case 4: dice2String = "four";
    break;
    case 5: dice2String = "five";
    break;
    case 6: dice2String = "six";
    break;
    default: console.log("Invalid dice number!");
}
console.log(dice2String);


let dice1 = document.querySelectorAll(".dots")[0];
let dice2 = document.querySelectorAll(".dots")[1];

dice1.classList.add(dice1String);
dice2.classList.add(dice2String);

let title = document.querySelector("h1");

if(random1===random2){
    title.innerText = "🚩Draw!🚩";
}
else if(random1>random2){
    title.innerText = "🚩P1 wins!";
}
else {
    title.innerText = "P2 wins!🚩";
}