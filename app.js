const billInput = document.querySelector('#billInput');
const buttons = document.querySelectorAll('.btn');
const peopleInput = document.querySelector('#peopleInput');
const totalTip = document.querySelector('#tipAmount');
const totalAmount = document.querySelector('#totalAmount');
let resetButton = document.querySelector('#reset')
let billToggle = document.querySelector('.bill-validation');
let peopleToggle = document.querySelector('.people-validation');


let billAmount = 0
let tip = 0;
let numPeople = 0;
let percentage = 0;

function calculateTip(num1, num2, num3) {
    return billAmount * percentage / 100;
}

billInput.addEventListener('input', function (e) {
    if (isNaN(billInput.value)) {
        billToggle.classList.add('validation-toggled')
    } else {
        billToggle.classList.remove('validation-toggled')
        billAmount = billInput.value;
    }
})

buttons.forEach(button => {
    button.addEventListener('click', () => {
        percentage = parseInt(button.innerText);
        tip = calculateTip()
    })
})


peopleInput.addEventListener('input', function (e) {
    if (isNaN(peopleInput.value)) {
        peopleToggle.classList.add('validation-toggled')
    } else {
        peopleToggle.classList.remove('validation-toggled')
        numPeople = peopleInput.value;
        tipAmount.innerText = `$${(tip / numPeople).toFixed(2)}`;
        totalAmount.innerText = `$${((billAmount / numPeople) + (tip / numPeople)).toFixed(2)}`
    }


})
    
resetButton.addEventListener('click', reset)

    function reset() {
        billInput.value = '';
        peopleInput.value = '';
        tipAmount.innerText = '$0.00'
        totalAmount.innerText = '$0.00'
        billAmount = 0;
        tip = 0;
        numPeople = 0;

}



// buttons.addEventListener('click', function () {
//     tip = billAmount * parseInt(this.innerText) / 100
//         console.log(tip)
//     })
