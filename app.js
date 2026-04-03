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
