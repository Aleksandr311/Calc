let plus = document.getElementById('ButtonPlus');
let minus = document.getElementById('ButtonMinus');
let multiplication = document.getElementById('ButtonMultiplication');
let division = document.getElementById('ButtonDivision');
let n1 = document.getElementById('Number1');
let n2 = document.getElementById('Number2');

/*function getNumber1(){
    return Number(n1.value);
}
function getNumber2(){
    return Number(n2.value);
} 
*/
function makeOperation(operayionCode){
    let num1 = Number(n1.value);
    let num2 = Number(n2.value);
    if (operayionCode === '+'){
        alert(num1 + num2);
    }
    else if (operayionCode === '-'){
        alert(num1 - num2);
    }
    else if (operayionCode === '*'){
        alert(num1 * num2);
    }
    else if (operayionCode === '/'){
        alert(num1 / num2);
    }
    else {
        alert('operation is unknow');
    }
    //alert(getNumber1() + getNumber2());
}


function onOperationButtonClick(eventObject){
    //debugger;
    let clickedElement = eventObject.currentTarget;
    let operation = clickedElement.innerHTML;
    makeOperation(operation);
}

plus.addEventListener('click', onOperationButtonClick);
minus.addEventListener('click', onOperationButtonClick);
multiplication.addEventListener('click', onOperationButtonClick);
division.addEventListener('click', onOperationButtonClick);
