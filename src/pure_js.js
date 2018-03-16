function updateDisplay(calcDisplay, value, buffer) {
    if (calcDisplay.value !== value) {
        buffer.push(value);
    }
    value === undefined ? calcDisplay.value = '' : calcDisplay.value = value;
    calcDisplay.textContent = calcDisplay.value;
}

// VARIABLES
var calcDisplay = document.getElementsByClassName('calculator__display')[0];
var calcKeys = document.getElementsByClassName('calculator__key');
var calcButton = document.getElementsByClassName('calculator__button');
var calcClear = document.getElementsByClassName('calculator__clear')[0];
var calcEqual = document.getElementsByClassName('calculator__key--equal')[0];
var calcPower = document.getElementsByClassName('calculator__undo')[0];
var calcSpace = document.getElementsByClassName('calculator__backspace')[0];
var buffer = [];

// INIT CALC KEYS

// As an option
// [].forEach.call(calcKeys, function(item, i, calcKeys) {
//     item.textContent=item.value; 
// });

Array.from(calcKeys).forEach(function(item, i, calcKeys) {
    item.textContent=item.value; 
});

// ADD NUMBERS TO INPUT
Array.from(calcButton).forEach(function(item, i, calcButton) {
    item.onclick = function() {
        updateDisplay(calcDisplay, calcDisplay.value + item.value, buffer)
    }
});

// CLEAR INPUT
calcClear.onclick = function() {
    updateDisplay(calcDisplay, '', buffer)
};

// SHOW RESULT
calcEqual.onclick = function() {
    updateDisplay(calcDisplay, eval(calcDisplay.value), buffer)
};

// UNDO BUTTON
calcPower.onclick = function() {
    buffer.pop()
    var previous = buffer.pop()
    updateDisplay(calcDisplay, previous, buffer)
    console.log(buffer)
};

// BACKSPACE BUTTON
calcSpace.onclick = function() {
    updateDisplay(calcDisplay, calcDisplay.value.substring(0, calcDisplay.value.length-1), buffer)
};