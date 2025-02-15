const container = document.querySelector("#container");


function createSquare(box){
    for (let i = 0; i < box * box; i++){
        const content = document.createElement("div");
        content.classList.add("content");
        content.style.flex = "1 1 calc(100% / var(--cols))";
        
        content.style.aspectRatio = "1 / 1";
        content.style.border = "1px solid grey";
        
        container.appendChild(content);
    }
    
    container.style.setProperty("--cols", box + 1);
    
    
    
    
}

createSquare(15);




























