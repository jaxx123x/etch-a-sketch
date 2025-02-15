const container = document.querySelector("#container");
const buttons = document.querySelector(".buttons");
const gridButton = document.createElement("button");
gridButton.classList.add("gridButton");
buttons.appendChild(gridButton);
gridButton.textContent = "Change grid";
const resetButton = document.createElement("button");
resetButton.classList.add("resetButton");
buttons.appendChild(resetButton);
resetButton.textContent = "Reset";

function createSquare(box){
    for (let i = 0; i < box * box; i++){
        const content = document.createElement("div");
        content.classList.add("content");
        content.style.flex = `1 1 calc((100% / ${box}) - 2px)`;
        content.style.aspectRatio = "1 / 1";
        content.style.border = "1px solid grey";
        content.style.margin = "0";
        container.appendChild(content);
    }
    container.style.setProperty("--cols", box );
}
createSquare(16);

gridButton.addEventListener("click", () => {
    let newGrid = prompt ("choose grid", "number");
    if (newGrid < 100){
        container.innerHTML = "";
        createSquare(newGrid);
        const squares = document.querySelectorAll(".content");
        squares.forEach(square => {
            square.addEventListener("mouseover", () => {
                square.style.backgroundColor = "black";
                square.style.border = "1px solid black";
            })
        })
    }
    else {
        alert("Add a number between 1 and 100.")
    }
})

function addColor(){
const squares = document.querySelectorAll(".content");
squares.forEach(square => {
    square.addEventListener("mouseover", () => {
        square.style.backgroundColor = "black";
        square.style.border = "1px solid black";

        
    })
})
}
    addColor();

resetButton.addEventListener("click", () => {
    const squares = document.querySelectorAll(".content");
    squares.forEach(square => {
        square.style.backgroundColor = "white";
        square.style.border = "1px solid grey"; 
    });
});








































