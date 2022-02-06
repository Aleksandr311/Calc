let plus = document.getElementById('ButtonPlus');
let minus = document.getElementById('ButtonMinus');
let multiplication = document.getElementById('ButtonMultiplication');
let division = document.getElementById('ButtonDivision');
let n1 = document.getElementById('Number1');
let n2 = document.getElementById('Number2');


function onPlusClick() {
    console.log('onPlusClick');
    console.dir(n1);
    console.log(n1.value);
    console.dir(n2.value);
    console.log(n1.value + n2.value);
    num1 = Number(n1.value);
    num2 = Number(n2.value);
    alert(num1 + num2);
}
function onMinusClick() {
    console.log('onMinusClick');
}
function onMultiplicationClick() {
    console.log('onMultiplicationClick');
}
function onDivisionClick() {
    console.log('onDivisionClick')
}
plus.addEventListener('click', onPlusClick);

