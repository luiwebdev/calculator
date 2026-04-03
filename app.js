let number1 = "";
let number2 = "";
let operator = "";

const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button")



function add(a, b) {
    return a + b;
}

function substract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}


function operate(operator, number1, number2) {

    switch (operator) {
        case "+":
            return add(number1, number2);
        case "-":
            return substract(number1, number2);
        case "*":
            return multiply(number1, number2);
        case "/":
            return divide(number1, number2);
    }
}


function getOperator(item) {
    if (item.target.className == "operator") {
        operator = item.target.textContent;
    }
}

function getNumber1(item) {
    if (operator == "" && item.target.className == "number") {
        number1 = number1 + item.target.textContent;
    }
}

function getNumber2(item) {
    if (operator !== "" && item.target.className == "number") {
        number2 = number2 + item.target.textContent;
    }
}

function getDisplay() {
    display.textContent = number1 + operator + number2;
}

function getResult(item) {
    if (item.target.className == "equal") {
        display.textContent = operate(operator, Number(number1), Number(number2));
    }
}
