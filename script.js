const squares = document.querySelector(`.sketchpad`);
const buttonReset = document.querySelector(`.reset`);

//const askGrid = 
let gridSize = 32;

function makeGrid (size) {
    for (let i = 0; i < size; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        squares.appendChild(row);
        console.log(i);
        for (let x = 0; x < size; x++) {
            const newSquare = document.createElement('div');
            newSquare.classList.add('square');
            //newSquare.style.border = "1px solid black";
            row.appendChild(newSquare);
            let height =  960 / size;
            newSquare.style.height = `${height}px`;
        }
    }  
}


makeGrid(gridSize);

const allSquares = document.querySelectorAll('.square');
allSquares.forEach( item => {
    item.addEventListener('mouseover', () => {
        item.classList.add('hover');

        // //reset color after short delay
        // setTimeout( () => {
        //     item.classList.remove('hover');
        // },500);
            
    });
});

buttonReset.addEventListener('click', () => {
    allSquares.forEach( item => {
        item.classList.remove('hover');
    });
    
});
