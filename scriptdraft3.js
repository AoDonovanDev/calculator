let inputString = "";
let currentVal = 0;
let storedVal = null;
let funcVarVal = "addition";
let reset = false;
let outputWindow = document.getElementById("output");
let numBtns = document.querySelectorAll(".numPad");
document.getElementById("add").addEventListener("click", plusOp);
document.getElementById("equals").addEventListener("click", operate);
document.getElementById("subtract").addEventListener("click", minusOp);
document.getElementById("multiply").addEventListener("click", multiplyOp)
document.getElementById("divide").addEventListener("click", divideOp);
numBtns.forEach(element => element.addEventListener("click", logBtn));
function logBtn(){
    if(reset == true){
        inputString = "";
        storedVal = 0;
        currentVal = 0;
        clearScreen(outputWindow);
    }
    let dataNum = this.getAttribute("data-num");
    let newEntry = document.createElement("p");
    inputString = inputString + dataNum;
    newEntry.innerHTML = dataNum;
    document.getElementById("output").appendChild(newEntry);
    console.log(inputString);
    currentVal = parseFloat(inputString);
}
function plusOp(){
    clearScreen(outputWindow);
    switch(funcVarVal){
        case "subtraction":
            storedVal = storedVal - currentVal;
            outputWindow.innerHTML = storedVal;
            currentVal = 0;
            inputString = ""
            console.log(storedVal);
            funcVarVal = "addition";
            break;
        case "multiplication":
            storedVal = storedVal * currentVal;
            outputWindow.innerHTML = storedVal;
            currentVal = 0;
            inputString = "";
            funcVarVal = "addition";
            break;
        case "division":
            storedVal = storedVal / currentVal;
            outputWindow.innerHTML = storedVal;
            inputString = "";
            currentVal = 0;
            inputString = "";
            funcVarVal = "addition";
        break;
        default:
            if(storedVal == null){
              storedVal = currentVal;
              inputString = "";
            }
         else{
            operate();
         }
    }
    return reset = false;
}
function minusOp(){
    clearScreen(outputWindow);
    switch (funcVarVal){
        case "addition":
            storedVal = currentVal + storedVal;
            outputWindow.innerHTML = storedVal;
            currentVal = 0;
            console.log(storedVal);
            inputString = "";
            funcVarVal = "subtraction";
            break;
        case "multiplication":
            storedVal = storedVal * currentVal;
            outputWindow.innerHTML = storedVal;
            currentVal = 0;
            inputString = "";
            funcVarVal = "subtraction"
            break;
        case "division":
            storedVal = storedVal / currentVal;
            outputWindow.innerHTML = storedVal;
            inputString = "";
            currentVal = 0;
            inputString = "";
            funcVarval = "subtraction";
        break;
        default:
             if (storedVal == null){
            storedVal = currentVal;
            inputString = "";
            }
         else{
         operate();
        }
    } 
    return reset = false;
}
function multiplyOp(){
    clearScreen(outputWindow);
    switch(funcVarVal){
        case "addition":
            storedVal = currentVal + storedVal;
            outputWindow.innerHTML = storedVal;
            inputString = "";
            funcVarVal = "multiplication";
        break;
        case "subtraction":
            storedVal = storedVal - currentVal;
            outputWindow.innerHTML = storedVal;
            inputString = ""
            funcVarVal = "multiplication";
            break;
        case "division":
            storedVal = storedVal / currentVal;
            outputWindow.innerHTML = storedVal;
            inputString = "";
            funcVarVal = "multiplication";
        break;
        default:
            if(storedVal == null){
                storedVal = currentVal;
                inputString = "";
            }
        else{
            operate()
        }
    }
    return reset = false;
}  
function divideOp(){
    clearScreen(outputWindow);
    switch(funcVarVal){
        case "addition":
            storedVal = currentVal + storedVal;
            outputWindow.innerHTML = storedVal;
            inputString = "";
            funcVarVal = "division";
        break;
        case "subtraction":
            storedVal = storedVal - currentVal;
            outputWindow.innerHTML = storedVal;
            inputString = ""
            funcVarVal = "division";
            break;
        case "multiplication":
            storedVal = storedVal * currentVal;
            outputWindow.innerHTML = storedVal;
            inputString = "";
            funcVarVal = "division";
            break;
        default:
            if(storedVal == null){
                storedVal = currentVal;
                inputString = "";
            }
        else{
            operate()
        }
    }
    return reset = false;
}
function operate(){
    switch (funcVarVal){
        case "addition":
            storedVal = currentVal + storedVal;
            outputWindow.innerHTML = storedVal;
            currentVal = 0;
            inputString = "";
        break;
        case "subtraction":
            storedVal = storedVal - currentVal;
            outputWindow.innerHTML = storedVal;
            currentVal = 0;
            inputString = "";
        break;
        case "multiplication":
            storedVal = storedVal * currentVal;
            outputWindow.innerHTML = storedVal;
            inputString = "";
        break;
        case "division":
            storedVal = storedVal / currentVal;
            outputWindow.innerHTML = storedVal;
            inputString = "";
    }
    return reset = true;
}
function clearScreen(parent){
    while(parent.firstChild){
        parent.removeChild(outputWindow.firstChild)
    };
}