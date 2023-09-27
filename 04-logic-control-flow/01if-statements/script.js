// Syntax
// if (condition) {
//   //code to be executed
// }

// if (true) {
//   console.log('This is true');
// }

// if (false) {
//   console.log('This is not true'); //will not run because the expression is false
// }

//Evaluate Expressions
// const x = 10;
// const y = 5;

// if (x >= y) {
//   console.log(`${x} is greater than or equal to ${y}`);
// }

//##############################################
// const x = 6;
// const y = 5;

// if (x === y) {
//   console.log(`${x} is equal to ${y}`);
// } else {
//   console.log(`${x} is NOT equal to ${y}`);
// }

// if (condition) {
//   //anong gagawin pag nag true yung condition
// } else {
//   //anong gagawin pag nag false yung condition
// }

//##############################################
//Block scope
// const x = 6;
// const y = 5;

// if (x !== y) {
//   var z = 20;
//   console.log(`${z} is 20`);
// }
// console.log(z); //error pag const or let pero pag var

//##############################################
//Shorthand if
const x = 6;
const y = 5;

// if (x > y) console.log(`${x} is greater than ${y}`);

if (x > y)
  console.log(`${x} is greater than ${y}`), console.log('This is true');
else console.log(`${x} is less than ${y}`);
