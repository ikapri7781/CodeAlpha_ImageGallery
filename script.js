const screen = document.getElementById("screen");
const buttons = document.querySelectorAll("button");

let expression = "";

buttons.forEach(button => {

    button.addEventListener("click", () => {

        const value = button.textContent;

        if(value === "AC"){
            expression = "";
            screen.value = "";
        }

        else if(value === "DEL"){
            expression = expression.slice(0,-1);
            screen.value = expression;
        }

        else if(value === "="){

            try{
                expression = eval(expression).toString();
                screen.value = expression;
            }

            catch{
                screen.value = "Error";
                expression = "";
            }
        }

        else{
            expression += value;
            screen.value = expression;
        }

    });

});

document.addEventListener("keydown",(e)=>{

    const key = e.key;

    if(
        (key >= "0" && key <= "9") ||
        key === "+" ||
        key === "-" ||
        key === "*" ||
        key === "/" ||
        key === "." ||
        key === "%"
    ){
        expression += key;
        screen.value = expression;
    }

    else if(key === "Enter"){
        try{
            expression = eval(expression).toString();
            screen.value = expression;
        }

        catch{
            screen.value = "Error";
            expression = "";
        }
    }

    else if(key === "Backspace"){
        expression = expression.slice(0,-1);
        screen.value = expression;
    }

    else if(key === "Escape"){
        expression = "";
        screen.value = "";
    }

});