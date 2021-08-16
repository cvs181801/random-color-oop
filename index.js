//grab elements from DOM
const ball = document.querySelector(".ball");

//make a way to generate a random number 1 - 6 

function randomNum() {
    return Math.floor(Math.random() * 6 ) + 1;
}

console.log(randomNum());

class Ghost {
    constructor(color) {
        this.color = color;
    }
}