const squares = document.querySelector(`.sketchpad`);
//const askGrid = 
let gridSize = 16 * 16;

function makeGrid () {
    for (i = 0; i <= gridSize; i++) {
        const newSquare = document.createElement('div');
        newSquare.classList.add('square');
        newSquare.style.border = "1px solid black";
        squares.appendChild(newSquare);
    }

}

makeGrid();

