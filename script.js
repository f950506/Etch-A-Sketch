const grid = document.querySelector('.grid');
let gridSize = 24;
drawGrid(gridSize);

const inputButton = document.getElementById('input');
inputButton.addEventListener('click', acquireInput);

function acquireInput() {
    let input = prompt('Grid size?');
    gridSize = parseInt(input);
    if (gridSize > 100) gridSize = 100;
    if (gridSize < 1) gridSize = 40;
    removeGridElements(grid);
    drawGrid(gridSize);
}

function removeGridElements(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function drawGrid(size) {
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    for (let i = 0; i < size * size; i++) {
        const gridElement = document.createElement('div');
        gridElement.addEventListener('mouseenter', etch);
        grid.appendChild(gridElement);
    }
}

function etch(e) {
    if (isClicked) {
        e.target.style.backgroundColor = 'blue';
    }
}

let isClicked = false;
window.addEventListener('mousedown', e => {
    isClicked = true;
});

window.addEventListener('mouseup', e => {
    isClicked = false;
});