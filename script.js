// Obtener elementos del DOM
const result = document.getElementById('result');
const numbers = document.getElementsByClassName('number');
const operators = document.getElementsByClassName('operator');
const clearBtn = document.getElementById('clear');
const equalsBtn = document.getElementById('equals');

// Asignar eventos a los botones numéricos y operadores
for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener('click', function () {
    appendNumber(numbers[i].value);
  });
}

for (let i = 0; i < operators.length; i++) {
  operators[i].addEventListener('click', function () {
    appendOperator(operators[i].value);
  });
}

clearBtn.addEventListener('click', clearResult);
equalsBtn.addEventListener('click', calculate);

// Funciones de la calculadora
function appendNumber(number) {
  result.value += number;
}

function appendOperator(operator) {
  result.value += operator;
}

function clearResult() {
  result.value = '';
}

function calculate() {
  try {
    result.value = eval(result.value);
  } catch (error) {
    result.value = 'Error';
  }
}