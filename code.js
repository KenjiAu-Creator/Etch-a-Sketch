const container = document.querySelector("#container");
function createDiv() {
    var board = document.createElement("div");
    board.className = "blank";
    board.addEventListener(`mouseenter`, function() {
        board.className = "Ink";
    });
    return board;
}
function setUpDiv(gridSize = 16) {
    myGrid = [];
    for(let j = 0; j <= gridSize; j++) {
        arrayOfDivs = [];
        for (let i = 0; i <= gridSize; i++) {
            arrayOfDivs.push(createDiv());
            arrayOfDivs[i].id = `div${j}${i}`;
            container.append(arrayOfDivs[i]);
        }
        myGrid.push(arrayOfDivs)
    }
}
function createGrid(gridSize = 16) {
    maxSize = 960;
    eachSize = maxSize / gridSize;
    Size = document.getElementById("container");
    Size.style.display = `grid`;
    Size.style.gridTemplateColumns = `repeat(${gridSize-1}, ${eachSize}px)`;
    Size.style.gridTemplateRows = `repeat(${gridSize-1}, ${eachSize}px)`;
};
function resetGrid() {
    for(let i = 0; i <= myGrid.length-1; i++) {
        for(let j = 0; j <= myGrid[i].length-1; j++) {
            resetBlock = document.getElementById(`div${i}${j}`);
            resetBlock.classList.remove("Ink");
        };
    };
}
const btn = document.getElementById("reset");
btn.addEventListener("click", () => {
    newGridSize = prompt("Please enter new grid size:");
    setUpDiv(newGridSize);
    createGrid(newGridSize);
    resetGrid();
    
});
setUpDiv()
createGrid()