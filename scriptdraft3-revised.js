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
        case "Numpad2":
            document.getElementById("twoBtn").classList.remove("btnMagic");
        break;
        case "Numpad3":
            document.getElementById("threeBtn").classList.remove("btnMagic");
        break;
        case "Numpad4":
            document.getElementById("fourBtn").classList.remove("btnMagic");
        break;
        case "Numpad5":
            document.getElementById("fiveBtn").classList.remove("btnMagic");
        break;
        case "Numpad6":
            document.getElementById("sixBtn").classList.remove("btnMagic");
        break;
        case "Numpad7":
            document.getElementById("sevenBtn").classList.remove("btnMagic");
        break;
        case "Numpad8":
            document.getElementById("eightBtn").classList.remove("btnMagic");
        break;
        case "Numpad9":
            document.getElementById("nineBtn").classList.remove("btnMagic");
        break;
        case "Numpad0":
            document.getElementById("zeroBtn").classList.remove("btnMagic");
        break;
        case "NumpadDecimal":
            document.getElementById("decimal").classList.remove("btnMagic");
        break;
        case "NumpadEnter":
            document.getElementById("equals").classList.remove("opsMagic");
        break;
        case "NumpadAdd":
            document.getElementById("add").classList.remove("opsMagic");
        break;
        case "NumpadSubtract":
            document.getElementById("subtract").classList.remove("opsMagic");
        break;
        case "NumpadMultiply":
            document.getElementById("multiply").classList.remove("opsMagic");
        break;
        case "NumpadDivide":
            document.getElementById("divide").classList.remove("opsMagic");
        break;
        case "NumpadEnter":
            document.getElementById("equals").classList.remove("opsMagic");
        break;
        case "Space":
            document.getElementById("clearBtn").classList.remove("opsMagic");
        break;
        case "NumLock":
            document.getElementById("clearBtn").classList.remove("opsMagic");
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
        document.getElementById("twoBtn").classList.add("btnMagic");
        inputString = inputString + "2";
        let newEntry = document.createElement("p");
        newEntry.innerHTML = "2";
        document.getElementById("output").appendChild(newEntry);
        currentVal = parseFloat(inputString);
    }
    if(e.code == "Numpad3"){
        document.getElementById("threeBtn").classList.add("btnMagic");
        inputString = inputString + "3";
        let newEntry = document.createElement("p");
        newEntry.innerHTML = "3";
        document.getElementById("output").appendChild(newEntry);
        currentVal = parseFloat(inputString);
    }
    if(e.code == "Numpad4"){
        document.getElementById("fourBtn").classList.add("btnMagic");
        inputString = inputString + "4";
        let newEntry = document.createElement("p");
        newEntry.innerHTML = "4";
        document.getElementById("output").appendChild(newEntry);
        currentVal = parseFloat(inputString);
    }
    if(e.code == "Numpad5"){
        document.getElementById("fiveBtn").classList.add("btnMagic");
        inputString = inputString + "5";
        let newEntry = document.createElement("p");
        newEntry.innerHTML = "5";
        document.getElementById("output").appendChild(newEntry);
        currentVal = parseFloat(inputString);
    }
    if(e.code == "Numpad6"){
        document.getElementById("sixBtn").classList.add("btnMagic");
        inputString = inputString + "6";
        let newEntry = document.createElement("p");
        newEntry.innerHTML = "6";
        document.getElementById("output").appendChild(newEntry);
        currentVal = parseFloat(inputString);
    }
    if(e.code == "Numpad7"){
        document.getElementById("sevenBtn").classList.add("btnMagic");
        inputString = inputString + "7";
        let newEntry = document.createElement("p");
        newEntry.innerHTML = "7";
        document.getElementById("output").appendChild(newEntry);
        currentVal = parseFloat(inputString);
    }
    if(e.code == "Numpad8"){
        document.getElementById("eightBtn").classList.add("btnMagic");
        inputString = inputString + "8";
        let newEntry = document.createElement("p");
        newEntry.innerHTML = "8";
        document.getElementById("output").appendChild(newEntry);
        currentVal = parseFloat(inputString);
    }
    if(e.code == "Numpad9"){
        document.getElementById("nineBtn").classList.add("btnMagic");
        inputString = inputString + "9";
        let newEntry = document.createElement("p");
        newEntry.innerHTML = "9";
        document.getElementById("output").appendChild(newEntry);
        currentVal = parseFloat(inputString);
    }
    if(e.code == "Numpad0"){
        document.getElementById("zeroBtn").classList.add("btnMagic");
        inputString = inputString + "0";
        let newEntry = document.createElement("p");
        newEntry.innerHTML = "0";
        document.getElementById("output").appendChild(newEntry);
        currentVal = parseFloat(inputString);
    }
    if(e.code == "NumpadDecimal"){
        document.getElementById("decimal").classList.add("btnMagic");
        inputString = inputString + ".";
        let newEntry = document.createElement("p");
        newEntry.innerHTML = ".";
        document.getElementById("output").appendChild(newEntry);
        currentVal = parseFloat(inputString);
    }
    if(e.code == "NumpadEnter"){
        document.getElementById("equals").classList.add("opsMagic");
        operate();
    }
    if(e.code == "NumpadAdd"){
        document.getElementById("add").classList.add("opsMagic");
        plusOp();
    }
    if(e.code == "NumpadMultiply"){
        document.getElementById("multiply").classList.add("opsMagic");
        multiplyOp();
    }
    if(e.code == "NumpadSubtract"){
        document.getElementById("subtract").classList.add("opsMagic");
        minusOp();
    }
    if(e.code == "NumpadDivide"){
        document.getElementById("divide").classList.add("opsMagic");
        divideOp();
    }
    if(e.code == "Space"){
        document.getElementById("clearBtn").classList.add("opsMagic");
        clearAll();
    }
    if(e.code == "NumLock"){
        document.getElementById("clearBtn").classList.add("opsMagic");
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