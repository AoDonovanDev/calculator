let currentVal = "";
let storedVal = [];
let funcVarVal = "";
let reset = false;
let outputWindow = document.getElementById("output");
let numBtns = document.querySelectorAll(".numPad");
document.getElementById("add").addEventListener("click", plusOp);
document.getElementById("equals").addEventListener("click", equalsOp);
document.getElementById("subtract").addEventListener("click", minusOp);
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
    console.log(currentVal);
}
function plusOp(){
    if(funcVarVal == "subtraction"){
        storedVal = [currentVal];
    }
    clearScreen(outputWindow);
    storedVal.push(parseFloat(currentVal));
    console.log(currentVal);
    console.log(storedVal);
    let sumArray = storedVal.reduce(sumIt);
    function sumIt(total, thisVal){
        return total + thisVal;
    }
    storedVal = [sumArray];
    outputWindow.innerHTML = parseFloat(storedVal);
    currentVal = "";
    funcVarVal = "addition"
}
function minusOp(){
    clearScreen(outputWindow);
    if(funcVarVal == "addition"){
        console.log("add and then subtract");
        storedVal = [parseFloat(storedVal) + parseFloat(currentVal)];
        outputWindow.innerHTML = storedVal;
        funcVarVal = "subtraction"
        currentVal = "";
    }
    else{
        console.log("do the subtracting");
        console.log(storedVal);
        console.log(currentVal);
        storedVal = parseFloat(storedVal) - parseFloat(currentVal);
        outputWindow.innerHTML = storedVal
        currentVal = "";
    }
}
function clearScreen(parent){
    while(parent.firstChild){
        parent.removeChild(outputWindow.firstChild)
    };
}