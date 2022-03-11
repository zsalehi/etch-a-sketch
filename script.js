// set defaults
const DEFAULT_COLOR = '#000000';
const DEFAULT_MODE = 'color';
const DEFAULT_SIZE = 16;

let currentColor = DEFAULT_COLOR;
let currentMode = DEFAULT_MODE;
let currentSize = DEFAULT_SIZE;



// these functions change the current default settings
function setCurrentColor (newColor) {
    currentColor = newColor;
}

function setCurrentMode(newMode) {
    activateMode(newMode);
    currentMode = newMode;
}

function setCurrentSize(newSize) {
    currentSize = newSize;
}

// select elements from DOM
const squares = document.querySelector(`.sketchpad`);
const sizeInput = document.querySelector(`#sizeSlider`);
const sizeValue = document.querySelector(`.size-value`);
const colorSelector = document.querySelector(`#colorPicker`);
const colorBtn = document.querySelector(`#colorBtn`);
const rainbowBtn = document.querySelector(`#rainbowBtn`);
const clearBtn = document.querySelector(`#clearBtn`);

// attach event listeners to DOM elements
colorSelector.addEventListener('change', (e) => setCurrentColor(e.target.value));
colorBtn.addEventListener('click', () => setCurrentMode('color'));
rainbowBtn.addEventListener('click', () =>setCurrentMode('rainbow'));
clearBtn.addEventListener('click', () => reloadGrid());
sizeInput.addEventListener('mousemove', (e) => updateSizeValue(e.target.value));
sizeInput.addEventListener('change', (e) => changeSize(e.target.value));


let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

function changeSize (value) {
    setCurrentSize(value);
    updateSizeValue(value);
    reloadGrid();
}

function updateSizeValue(value) {
    sizeValue.innerHTML = `${value} x ${value}`;
}

function reloadGrid () {
    clearGrid();
    makeGrid(currentSize);
}

function clearGrid() {
    squares.innerHTML = '';
}


function makeGrid (size) {
    for (let i = 0; i < size; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        squares.appendChild(row);
        for (let x = 0; x < size; x++) {
            const newSquare = document.createElement('div');
            newSquare.classList.add('square');
            let height =  960 / size;
            newSquare.style.height = `${height}px`;
            newSquare.addEventListener('mouseover', changeColor);
            newSquare.addEventListener('mousedown', changeColor);
            row.appendChild(newSquare);

        }
    }
}

function changeColor (e) {
    if (e.type === 'mouseover' && !mouseDown) return;
    if (currentMode === 'rainbow') {
        const randomR = Math.floor(Math.random() * 256);
        const randomG = Math.floor(Math.random() * 256);
        const randomB = Math.floor(Math.random() * 256);
        e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
    } else if (currentMode === 'color') {
        e.target.style.backgroundColor = currentColor;
    }
    
}

function activateMode (newMode) {
   if (currentMode === 'rainbow') {
       rainbowBtn.classList.remove('active');
   } else if (currentMode === 'color') {
       colorBtn.classList.remove('active');
   }

   if (newMode === 'rainbow') {
       rainbowBtn.classList.add('active');
   } else if (newMode === 'color') {
       colorBtn.classList.add('active');
   }
}

window.addEventListener('load', () => {
    makeGrid(DEFAULT_SIZE);
    activateMode(DEFAULT_MODE);
});





