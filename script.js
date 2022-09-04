let currentVal = "";
let storeArgs = [];
let funcVarVal = "";
let reset = false;
let outputWindow = document.getElementById("output");
let numBtns = document.querySelectorAll(".numPad");
//document.getElementById("add").addEventListener("click", plusOp);
//document.getElementById("equals").addEventListener("click", equalsOp);
//document.getElementById("subtract").addEventListener("click", minusOp);
numBtns.forEach(element => element.addEventListener("click", logBtn));
function logBtn(){
    if(reset == true){
        currentVal = "";
        clearScreen(outputWindow);
    }
    let dataNum = this.getAttribute("data-num");
    let newEntry = document.createElement("p");
    currentVal = currentVal + dataNum;
    newEntry.innerHTML = dataNum;
    document.getElementById("output").appendChild(newEntry);
}
function plusOp(){
    clearScreen(outputWindow);
    storeArgs.push(parseFloat(currentVal));
    sumArray = storeArgs.reduce(addVals);
    function addVals(total, thisVal){
       return total + thisVal;
    }
    storeArgs = [sumArray];
    outputWindow.innerHTML = parseFloat(storeArgs);
    currentVal = "";
    funcVarVal = "addition"
    return reset = false;
}
function minusOp(){
    clearScreen(outputWindow);
    if(funcVarVal == "addition"){
        console.log("sometimes the subtract button should only add")
        console.log(currentVal)
        console.log(storeArgs);
        currentVal = parseFloat(currentVal) + parseInt(storeArgs);
        console.log(currentVal);
        funcVarVal = "subtraction"
        return;
    }
    if(funcVarVal == "subtraction"){
    storeArgs.push(parseFloat(currentVal));
    console.log(storeArgs);
    subArray = storeArgs.reduce(subVals);
    function subVals(total, thisVal){
        return total - thisVal;
    }
    storeArgs = [subArray];
    outputWindow.innerHTML = parseFloat(storeArgs);
    currentVal = "";
    funcVarVal = "subtraction";
    return reset = false;
    }
}
function equalsOp(){
    clearScreen(outputWindow);
    if(funcVarVal == "addition"){
        let result = parseFloat(currentVal) + parseFloat(storeArgs);
        outputWindow.innerHTML = result;
        currentVal = result;
        storeArgs = [];
    }
    if(funcVarVal == "subtraction"){
        let result = parseFloat(storeArgs) - parseFloat(currentVal);
        outputWindow.innerHTML = result;
        storeArgs = [];
        currentVal = result;
    }
    if(funcVarVal == "multiplication"){
        let result = storeVal*parseFloat(currentVal);
        outputWindow.innerHTML = result;
        storeVal = 0;
        currentVal = result;
    }
    return reset = true;
}
function clearScreen(parent){
    while(parent.firstChild){
        parent.removeChild(outputWindow.firstChild)
    };
}
