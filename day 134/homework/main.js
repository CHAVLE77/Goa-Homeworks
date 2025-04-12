import { add } from './Plus.js';
import { subtract } from './Minus.js';
import { multiply } from './Multiply.js';
import { divide } from './Divide.js';

document.getElementById('add').addEventListener('click', () => {
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);
  document.getElementById('result').textContent = add(num1, num2);
});

document.getElementById('subtract').addEventListener('click', () => {
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);
  document.getElementById('result').textContent = subtract(num1, num2);
});

document.getElementById('multiply').addEventListener('click', () => {
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);
  document.getElementById('result').textContent = multiply(num1, num2);
});

document.getElementById('divide').addEventListener('click', () => {
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);
  document.getElementById('result').textContent = divide(num1, num2);
});
