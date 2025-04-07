let display, buttons, buttons_opr, button_clr, button_cal;

document.addEventListener('DOMContentLoaded', () =>{
    display = document.getElementById("display");
    buttons = document.querySelectorAll(".btn");
    buttons_opr = document.querySelectorAll(".btn-opr");
    button_clr =document.querySelectorAll("#clr");
    
    buttons.forEach(button => {
    button.addEventListener("click", () => {
    button.style.backgroundColor = "blue"
        if (button.value === "=") {
            try {
                // Replace × with *, ÷ with / for proper evaluation
                let expression = display.value.replace(/×/g, '*').replace(/÷/g, '/');
                
                display.value = eval(expression);
                console.log(display.value)
            } catch (e) {
                display.value = "Error";
            }
        } else if(button.value === "*" || button.value === "-" || button.value === "/" || button.value === "+") {
            display.value += ` ${button.value} `;
        }
        else if(button.value === "clear") {
            display.value = " ";
            buttons.forEach(button=>{
                button.style.backgroundColor ="dodgerblue"
            })
        }else if (button.value === "⌫"){
            display.value = display.value.slice(0,-1);
        }
        else {
            display.value += button.value;
        }
    });
});
})