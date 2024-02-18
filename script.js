function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}

function operate(first, operator, last) {
    if (operator === '+') {
        return add(first, last);
    }
    else if (operator === '-') {
        return subtract(first, last);
    }
    else if (operator === '×') {
        return multiply(first, last);
    }
    else if (operator === '÷') {
        return divide(first, last);
    }
}

let first;
let operator;
let last;
let displayValue = 0;
const operators = new Set(['+','-','×','÷']);

const keys = Array.from(document.querySelectorAll('button'));
const numberKeys = keys.filter((item) => Number.isInteger(Number(item.textContent)));
const operatorKeys = keys.filter((item) => operators.has(item.textContent));
const clearKey = keys.find((item) => item.textContent == 'clear');
const equalKey = keys.find((item) => item.textContent == '=');
const display = document.querySelector('.display');

numberKeys.map((item) => item.addEventListener('click', () => {
    if (displayValue === 0) {
        displayValue = item.textContent;
    }
    else {
        displayValue += item.textContent;
    }
    display.textContent = displayValue;
}));

clearKey.addEventListener('click', () => {
    displayValue = 0;
    display.textContent = 0;
});

operatorKeys.map((item) => item.addEventListener('click', () => {
    first = displayValue;
    operator = item.textContent;
    displayValue = 0;
    display.textContent = 0;
}));

equalKey.addEventListener('click', () => {
    last = displayValue;
    displayValue = operate(Number(first), operator, Number(last));
    display.textContent = displayValue;
});