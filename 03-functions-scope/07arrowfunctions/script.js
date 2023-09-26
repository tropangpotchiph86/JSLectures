//Normal function declaration
// function add(a, b) {
//   return a + b;
// }

// console.log(add(1, 2));

//#############################################
//rewriting it as arrow function
// const add = (a, b) => {
//   return a + b;
// };
// console.log(add(1, 2));

//#############################################
//Implicit Return
// const subtract = (a, b) => a - b;

// console.log(subtract(10, 5));

//#############################################
// const double = (a) => a * 2;
// console.log(double(10));

//#############################################
//Return an object {}
const createObj = () => ({
  name: 'Ryan',
  age: 40,
});
console.log(createObj());

//#############################################
//for each
const numbers = [1, 2, 3, 4, 5];
// numbers.forEach(function (n) {
//   console.log(n);
// });

numbers.forEach((n) => console.log(n));

//#############################################
//#############################################
