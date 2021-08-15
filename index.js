//grab elements from DOM
const ball = document.querySelector(".ball");

//make a way to generate a random number 1 - 6 

const randomNumber = function randomNum() {
    Math.floor(Math.random * 6);
}

console.log(randomNumber);

// function pickColor() {
//     case randomNumber === 0
// }