let inputString = "";
let currentVal = 0;
let storedVal = null;
let funcVarVal = "";
let reset = false;
let outputWindow = document.getElementById("output");
let numBtns = document.querySelectorAll(".numPad");
window.addEventListener("keydown", keyListen);
window.addEventListener("keyup", keyUnstyle);
document.getElementById("add").addEventListener("click", plusOp);
document.getElementById("equals").addEventListener("click", operate);
document.getElementById("subtract").addEventListener("click", minusOp);
document.getElementById("multiply").addEventListener("click", multiplyOp)
document.getElementById("divide").addEventListener("click", divideOp);
document.getElementById("clearBtn").addEventListener("click", clearAll);
numBtns.forEach(element => element.addEventListener("click", logBtn));
function keyUnstyle(e){
    switch(e.code){
        case "Numpad1":
        document.getElementById("oneBtn").classList.remove("btnMagic");
    break;
    }
}
function keyListen(e){
    console.log(e.code);
    if(e.code == "Numpad1"){
        document.getElementById("oneBtn").classList.add("btnMagic");
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
    if(e.code == "Space"){
        clearAll();
    }
}
function logBtn(){
    /* if(reset == true){
        inputString = "";
        storedVal = 0;
        currentVal = 0;
        clearScreen(outputWindow);
    } */
    let dataNum = this.getAttribute("data-num");
    let newEntry = document.createElement("p");
    inputString = inputString + dataNum;
    newEntry.innerHTML = dataNum;
    document.getElementById("output").appendChild(newEntry);
    console.log(inputString);
    currentVal = parseFloat(inputString);
}
function plusOp(){
    if(storedVal == null){
        storedVal = currentVal;
        currentVal = 0;
        inputString = "";
        outputWindow.innerHTML = inputString;
    }
    if(funcVarVal == ""){
        funcVarVal  = "addition";
        operate();
    }
    else{
        operate();
        funcVarVal = "addition";
    }
}
function minusOp(){
    if(storedVal == null){
        storedVal = currentVal;
        currentVal = 0;
        inputString = "";
    } 
    if(funcVarVal == ""){
        funcVarVal  = "subtraction";
        outputWindow.innerHTML = inputString;

    }
    else{
        operate();
        funcVarVal = "subtraction";
    }
}
function multiplyOp(){
    if(storedVal == null){
        storedVal = currentVal;
        currentVal = 1;
        inputString = "";
        outputWindow.innerHTML = inputString;
    } 
    if(funcVarVal == ""){
        funcVarVal  = "multiplication";
    }
    else{
        operate();
        funcVarVal = "multiplication";
    }
}
function divideOp(){
    if(storedVal == null){
        storedVal = currentVal;
        currentVal = 1;
        inputString = "";
        outputWindow.innerHTML = inputString;
    }
    if(funcVarVal == ""){
        funcVarVal = "division";
    }
    else{
        operate()
        funcVarVal = "division";
    }
}
function operate(){
    switch (funcVarVal){
        case "addition":
            storedVal = currentVal + storedVal;
            outputWindow.innerHTML = storedVal;
            inputString = "";
            currentVal = 0;
        break;
        case "subtraction":
            storedVal = storedVal - currentVal;
            outputWindow.innerHTML = storedVal;
            inputString = "";
            currentVal = 0;
        break;
        case "multiplication":
            storedVal = storedVal * currentVal;
            outputWindow.innerHTML = storedVal;
            inputString = "";
            currentVal = 1;
        break;
        case "division":
            storedVal = storedVal / currentVal;
            outputWindow.innerHTML = storedVal;
            inputString = "";  
            currentVal = 1;
    }
    return reset = true;
}
function clearAll(){
    currentVal = 0;
    storedVal = null;
    inputString = "";
    funcVarVal = "";
    clearScreen(outputWindow);
}
function clearScreen(parent){  
    while(parent.firstChild){
        parent.removeChild(outputWindow.firstChild)
    };
}