let drumBtn = document.querySelectorAll(".drum");

let len = drumBtn.length;


// drumBtn.addEventListener("click", ()=>{
//     audio.play();
// })

for (let i = 0; i < len; i++) {
    drumBtn[i].addEventListener("click", function () {
        // console.log("clicked");
        console.log(this.classList[0]);

        audioEvent(this.classList[0]);
        // btnAnimate(this.classList[0]);

    });

}

document.addEventListener("keypress", function (event) {
    // console.log(this);
    // console.log(event.key);
    audioEvent(event.key);
    // btnAnimate(event.key);
})


function audioEvent(key) {
    let audio;
    switch (key) {
        case 'w':
            audio = new Audio("./sounds/tom-1.mp3");
            audio.play();btnAnimate(key);
            break;
        case 'a':
            audio = new Audio("./sounds/tom-2.mp3");
            audio.play();btnAnimate(key);
            break;
        case 's':
            audio = new Audio("./sounds/tom-3.mp3");
            audio.play();btnAnimate(key);
            break;
        case 'd':
            audio = new Audio("./sounds/tom-4.mp3");
            audio.play();btnAnimate(key);
            break;
        case 'j':
            audio = new Audio("./sounds/crash.mp3");
            audio.play();btnAnimate(key);
            break;
        case 'k':
            audio = new Audio("./sounds/kick.mp3");
            audio.play();btnAnimate(key);
            break;
        case 'l':
            audio = new Audio("./sounds/snare.mp3");
            audio.play();btnAnimate(key);
            break;
        default: console.log(key);
    }

    // btnAnimate(key);
}


function btnAnimate(key) {
    document.querySelector("." + key).classList.add("pressed");
    setTimeout(function () {
        document.querySelector("." + key).classList.remove("pressed");
    }, 100
    );
}