//grab elements from DOM
const ball = document.querySelector(".ball");



class Ghost {
    constructor(color) {
        this.color = color;
    }
}

//make a way to generate a random number 1 through 6 
function randomNum() {
    return Math.floor(Math.random() * 6 ) + 1;
}
//assign different colors to different numbers
let color = "";
if (randomNum() === 1) {
    color = "red";
} else if (randomNum() === 2) {
    color = "purple";
} else if (randomNum() === 3) {
    color = "white";
} else if (randomNum() === 4) {
    color = "yellow";
} else if (randomNum() === 5) {
    color = "green";
} else if (randomNum() === 6) {
    color = "blue";
} else {
    color = "pink";
}

console.log("random color = " + color);

const ghostie = new Ghost(color);

console.log(ghostie.color);