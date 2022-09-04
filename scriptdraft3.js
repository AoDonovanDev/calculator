let inputString = "";
let currentVal = 0;
let storedVal = null;
let funcVarVal = "addition";
let reset = false;
let outputWindow = document.getElementById("output");
let numBtns = document.querySelectorAll(".numPad");
window.addEventListener("keydown", keyListen);
document.getElementById("add").addEventListener("click", plusOp);
document.getElementById("equals").addEventListener("click", operate);
document.getElementById("subtract").addEventListener("click", minusOp);
document.getElementById("multiply").addEventListener("click", multiplyOp)
document.getElementById("divide").addEventListener("click", divideOp);
numBtns.forEach(element => element.addEventListener("click", logBtn));
function keyListen(e){
    console.log(e.code);
    if(e.code == "Numpad1"){
        inputString = inputString + "1";
        let newEntry = document.createElement("p");
        newEntry.innerHTML = "1";
        document.getElementById("output").appendChild(newEntry);
        currentVal = parseFloat(inputString);
    }
    if(e.code == "Numpad2"){
        inputString = inputString + "2";
        let newEntry = document.createElement("p");
        newEntry.innerHTML = "2";
        document.getElementById("output").appendChild(newEntry);
        currentVal = parseFloat(inputString);
    }
    if(e.code == "Numpad3"){
        inputString = inputString + "3";
        let newEntry = document.createElement("p");
        newEntry.innerHTML = "3";
        document.getElementById("output").appendChild(newEntry);
        currentVal = parseFloat(inputString);
    }
    if(e.code == "Numpad4"){
        inputString = inputString + "4";
        let newEntry = document.createElement("p");
        newEntry.innerHTML = "4";
        document.getElementById("output").appendChild(newEntry);
        currentVal = parseFloat(inputString);
    }
    if(e.code == "Numpad5"){
        inputString = inputString + "5";
        let newEntry = document.createElement("p");
        newEntry.innerHTML = "5";
        document.getElementById("output").appendChild(newEntry);
        currentVal = parseFloat(inputString);
    }
    if(e.code == "Numpad6"){
        inputString = inputString + "6";
        let newEntry = document.createElement("p");
        newEntry.innerHTML = "6";
        document.getElementById("output").appendChild(newEntry);
        currentVal = parseFloat(inputString);
    }
    if(e.code == "Numpad7"){
        inputString = inputString + "7";
        let newEntry = document.createElement("p");
        newEntry.innerHTML = "7";
        document.getElementById("output").appendChild(newEntry);
        currentVal = parseFloat(inputString);
    }
    if(e.code == "Numpad8"){
        inputString = inputString + "8";
        let newEntry = document.createElement("p");
        newEntry.innerHTML = "8";
        document.getElementById("output").appendChild(newEntry);
        currentVal = parseFloat(inputString);
    }
    if(e.code == "Numpad9"){
        inputString = inputString + "9";
        let newEntry = document.createElement("p");
        newEntry.innerHTML = "9";
        document.getElementById("output").appendChild(newEntry);
        currentVal = parseFloat(inputString);
    }
    if(e.code == "Numpad0"){
        inputString = inputString + "0";
        let newEntry = document.createElement("p");
        newEntry.innerHTML = "0";
        document.getElementById("output").appendChild(newEntry);
        currentVal = parseFloat(inputString);
    }
    if(e.code == "NumpadDecimal"){
        inputString = inputString + ".";
        let newEntry = document.createElement("p");
        newEntry.innerHTML = ".";
        document.getElementById("output").appendChild(newEntry);
        currentVal = parseFloat(inputString);
    }
    if(e.code == "NumpadEnter"){
        operate();
    }
    if(e.code == "NumpadAdd"){
        plusOp();
    }
    if(e.code == "NumpadMultiply"){
        multiplyOp();
    }
    if(e.code == "NumpadSubtract"){
        minusOp();
    }
    if(e.code == "NumpadDivide"){
        divideOp();
    }
}
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