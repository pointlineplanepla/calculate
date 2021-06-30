document.querySelectorAll('.btn').forEach(
    button => button.addEventListener('click', onclick));

let first = true;
let operand1 = 0, operator, operand2 = 0;
const result = document.getElementById('res');

function onclick(event) {
  const button = event.target;
  switch (button.id) {
    case 'btn0':
    case 'btn1':
      if (first) {
        operand1 = operand1 * 2 + Number(button.innerHTML);
      } else {
        operand2 = operand2 * 2 + Number(button.innerHTML);
      }
      result.innerHTML += button.innerHTML;
      break;
    case 'btnClr':
      operand1 = operand2 = 0;
      result.innerHTML = '';
      first = true;
      break;
    case 'btnEql':
      operand1 = eval(`${operand1} ${operator} ${operand2}`);
      operand2 = 0;
      result.innerHTML = operand1.toString(2);
      first = !first;
      break;
    case 'btnSum':
    case 'btnSub':
    case 'btnMul':
    case 'btnDiv':
      first = !first;
      operator = button.innerText;
      result.innerHTML += button.innerHTML;
  }
};