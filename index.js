//grab elements from DOM
const shape = document.querySelector(".shape");
const faces = document.querySelectorAll(".face");


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

function makeColorChange() {
    return randomNum();
}

console.log(makeColorChange());

shape.addEventListener('mouseenter', function(e) {
    e.preventDefault();
    //x = e.pageX;
    //y = e.pageY;
    console.log("e listener worked");
    for (face of faces) {
        face.style.backgroundColor = `${ghostie.color}`;
        //face.style.left = `${x -1 }` + "em";
        //face.style.left = x + "px";
        //face.style.top = y + "px";
        face.style.transition = "transform ease 1s";
        }

    //return makeColorChange();
        //window.location.reload();
    })
    // shape.addEventListener('mouseout', function(e) {
    //     for (face of faces) {
    //         face.style.backgroundColor = `${ghostie.color}`;
    //     }
    //})
    

    shape.addEventListener('mouseout', function(e) {
        e.preventDefault();
        window.location.reload();
       
        })