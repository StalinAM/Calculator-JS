// class Display {
//     constructor(value1, value2) {
//         this.firstValue = value1;
//         this.secondValue = value2;
//     }

// }
const displayFirstValue = document.querySelector('.first-value');
const displaySecondtValue = document.querySelector('.secont-value');
const buttonValue = document.querySelectorAll(".number");
const operatorSign = document.querySelectorAll(".operator");

buttonValue.forEach(item => {
    item.addEventListener('click', () => {
        displayFirstValue.textContent = item.innerHTML;
    });
});

