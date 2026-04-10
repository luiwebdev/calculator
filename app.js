

let number1 = "";
let number2 = "";
let total = "";
let operator = "";

const buttons = document.querySelectorAll("button");
const display = document.querySelector(".display");

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
    if (b === 0) {
        return "Error";
    }
    return a / b
}

function operate(operator, number1, number2) {

    switch (operator) {
        case "+":
            return add(number1, number2);
        case "-":
            return subtract(number1, number2);
        case "*":
            return multiply(number1, number2);
        case "/":
            return divide(number1, number2);
    }
}

function getNumber1(item) {
    if (!operator && item.target.className == "number") {
        number1 = number1 + item.target.textContent;
        return number1;
    }
}

function getNumber2(item) {
    if (operator && item.target.className == "number") {
        number2 = number2 + item.target.textContent;
        return number2;
    }
}

function getOperator(item) {
    if (item.target.className == "operator") {
        operator = item.target.textContent;
        return operator;
    }
}

function getTotal(item) {
    if (item.target.className == "equal") {

        if (total == "") {
            total = operate(operator, Number(number1), Number(number2));
            number1 = "";
            number2 = "";
            operator = "";
            return total
        } else if (total !== "") {
            number1 = total;
            total = operate(operator, Number(number1), Number(number2));
            number1 = "";
            number2 = "";
            operator = "";
            return total;
        }
    }
}

function getClear(item) {
    if (item.target.className == "clear") {
        number1 = "";
        number2 = "";
        operator = "";
        total = "";
    }
}
