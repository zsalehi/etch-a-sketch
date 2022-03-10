const squares = document.querySelector(`.sketchpad`);
let gridSize = 0;

function makeGrid () {
    for (i = 0; i <= gridSize; i++) {
        const newSquare = document.createElement('div');
        newSquare.classList.add('square');
        squares.appendChild('newSquare');
    }

}

