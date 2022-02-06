let plus = document.getElementById('ButtonPlus');
let minus = document.getElementById('ButtonMinus');
let multiplication = document.getElementById('ButtonMultiplication');
let division = document.getElementById('ButtonDivision');

function onPlusClic(){
    console.log('onPlusClic')
}
function onMinusClic(){
    console.log('onMinusClic')
}
function onMultiplicationClic(){
    console.log('onMultiplicationClic')
}
function onDivisionClic(){
    console.log('onDivisionClic')
}
plus.addEventListener('click', onPlusClic);