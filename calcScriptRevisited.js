const calculator = ((currentVal, storedVal) => {
    const add = currentVal + storedVal;
    const sub = storedVal - currentVal;
    const mult = currentVal * storedVal;
    const div = storedVal / currentVal;
    return {add, sub, mult, div}
})()
if(storedVal == null){
    storedVal = currentVal;
}