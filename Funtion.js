function addErrorClass(elementId){
    let element = document.getElementById(elementId);
    element.className='error-input';
}
function addErrorlassToAllInputs(){
    addErrorClass('firstName');
    addErrorClass('lastName');
    addErrorClass('address');
}
//window.setTimeout(addErrorlassToAllInputs, 2000);
//addErrorlassToAllInputs()
let sandButton = document.getElementById('send-button');
sandButton.addEventListener('click', addErrorlassToAllInput);