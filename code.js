const container = document.querySelector("#container");
function createDiv() {
    var grid = document.createElement("div");
    grid.addEventListener(`mouseenter`, function() {
        this.style.background = "black";
    });
    return grid;
}
function setUpDiv() {
    numOfRow = 127;
    numOfCol = 127;
    myGrid = [];
    for(let j = 0; j <= numOfRow; j++) {
        arrayOfDivs = [];
        for (let i = 0; i <= numOfCol; i++) {
            arrayOfDivs.push(createDiv());
            arrayOfDivs[i].className = `row${j}`;
            arrayOfDivs[i].id = `div${j}${i}`;
            container.append(arrayOfDivs[i]);
        }
        myGrid.push(arrayOfDivs)
    }
}
// let test = document.getElementById("container");
// test.addEventListener("mouseenter", function() {
//     this.style.background = "black";
// })
// test.addEventListener("mouseleave", function() {
//     this.style.background = "white";
// })
setUpDiv()