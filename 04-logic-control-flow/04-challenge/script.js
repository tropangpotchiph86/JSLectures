function calculator(num1, num2, operator) {
  let result;

  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num1 / num2;
      break;
    default:
      result = 'Invalid Operator';
  }

  return result;
}

// function calculator(num1, num2, operator) {
//   let result;

//   if (operator === '+') {
//     result = num1 + num2;
//   } else if (operator === '-') {
//     result = num1 - num2;
//   } else if (operator === '*') {
//     result = num1 * num2;
//   } else if (operator === '/') {
//     result = num1 / num2;
//   } else {
//     result = 'Invalid Operator';
//   }

//   return result;
// }

console.log(calculator(5, 2, '+'));
console.log(calculator(5, 2, '-'));
console.log(calculator(5, 2, '*'));
console.log(calculator(5, 2, '/'));
console.log(calculator(5, 2, '&'));
