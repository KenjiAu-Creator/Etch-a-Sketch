const container = document.querySelector("#container");
function createDiv() {
    var grid = document.createElement("div");
    grid.addEventListener(`mouseenter`, function() {
        this.style.background = "black";
    });
    return grid;
}
function setUpDiv() {
    gridSize = 15;
    myGrid = [];
    for(let j = 0; j <= gridSize; j++) {
        arrayOfDivs = [];
        for (let i = 0; i <= gridSize; i++) {
            arrayOfDivs.push(createDiv());
            arrayOfDivs[i].className = `row${j}`;
            arrayOfDivs[i].id = `div${j}${i}`;
            container.append(arrayOfDivs[i]);
        }
        myGrid.push(arrayOfDivs)
    }
}
function createGrid() {
    maxSize = 960;
    eachSize = maxSize / gridSize;
    Size = document.getElementById("container");
    Size.style.display = `grid`;
    Size.style.gridTemplateColumns = `repeat(${gridSize+1}, ${eachSize}px)`;
    Size.style.gridTemplateRows = `repeat(${gridSize+1}, ${eachSize}px)`;
};
setUpDiv()
createGrid()