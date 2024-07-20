let displayValue = '0';
let operator = null;
let firstOperand = null;
let waitingForSecondOperand = false;

function appendNumber(number) {
    if (waitingForSecondOperand === true) {
        displayValue = number;
        waitingForSecondOperand = false;
    } else {
        displayValue = displayValue === '0' ? number : displayValue + number;
    }
    updateDisplay();
}

function setOperator(op) {
    if (operator !== null && !waitingForSecondOperand) {
        calculate();
    }
    operator = op;
    firstOperand = parseFloat(displayValue);
    waitingForSecondOperand = true;
}

function calculate() {
    if (operator === null || waitingForSecondOperand) return;

    const secondOperand = parseFloat(displayValue);
    let result = 0;
    switch (operator) {
        case '+':
            result = firstOperand + secondOperand;
            break;
        case '-':
            result = firstOperand - secondOperand;
            break;
        case '*':
            result = firstOperand * secondOperand;
            break;
        case '/':
            if (secondOperand === 0) {
                result = 'Error';
            } else {
                result = firstOperand / secondOperand;
            }
            break;
        default:
            return;
    }
    displayValue = result.toString();
    operator = null;
    firstOperand = null;
    updateDisplay();
}

function clearDisplay() {
    displayValue = '0';
    operator = null;
    firstOperand = null;
    waitingForSecondOperand = false;
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').textContent = displayValue;
}
