const screen = document.querySelector(".screen");
const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        let data = button.textContent; 
        
        
        if(button.id === "clean"){
            screen.textContent = "0";
            return;
        }
        
        if(button.id === "delete" ){
            if(screen.textContent.length === 1){
                screen.textContent="0" 
            }else{screen.textContent=screen.textContent.slice(0,-1);}
            return; 
        }
        
        if(button.id === "result"){
            try {
                screen.textContent = eval(screen.textContent);
            } catch (error) {
                screen.textContent = "Math error"
            }
            
            return;
        }
        
        if (screen.textContent === "0"|| screen.textContent === "Math error"){
            screen.textContent = data;
        }else{screen.textContent += data;}
        
        
    })
})
