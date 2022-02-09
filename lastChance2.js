//let plus = document.getElementById('ButtonPlus');
//let minus = document.getElementById('ButtonMinus');
//let multiplication = document.getElementById('ButtonMultiplication');
//let division = document.getElementById('ButtonDivision');
let n1 = document.getElementById('Number1');
let n2 = document.getElementById('Number2');
let arrayOfButtons = document.getElementsByClassName('operationButton')
function makeOperation(operayionCode) {
    let num1 = Number(n1.value);
    let num2 = Number(n2.value);
    if (operayionCode === '+') {
        alert(num1 + num2);
    }
    else if (operayionCode === '-') {
        alert(num1 - num2);
    }
    else if (operayionCode === '*') {
        alert(num1 * num2);
    }
    else if (operayionCode === '/') {
        alert(num1 / num2);
    }
    else {
        alert('operation is unknow');
    }
}
function onOperationButtonClick(eventObject) {
    let clickedElement = eventObject.currentTarget;
    let operation = clickedElement.innerHTML;
    makeOperation(operation);
}
//let arrayOfButtons = [plus, minus, multiplication, division];

for (let i = 0; i < arrayOfButtons.length; i++) {
    arrayOfButtons[i].addEventListener('click', onOperationButtonClick);
}
