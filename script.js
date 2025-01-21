import { add } from './add.js';
import { subtract } from './sub.js';
// import { multiply } from './mul.js';
// import { divide } from './div.js';

let resultSpan = document.getElementById('result');

document.getElementById('addBtn').addEventListener('click', () => {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    resultSpan.textContent = add(num1, num2);
});

document.getElementById('subBtn').addEventListener('click', () => {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    resultSpan.textContent = subtract(num1, num2);
});

document.getElementById('mulBtn').addEventListener('click', () => {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    resultSpan.textContent = multiply(num1, num2);
});

document.getElementById('divBtn').addEventListener('click', () => {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    resultSpan.textContent = divide(num1, num2);
});
