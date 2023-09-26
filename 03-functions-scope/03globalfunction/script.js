//global variable it is accessible from anywhere.
// alert('Hello');

// console.log(innerWidth);
// console.log(innerHeight);

// function run() {
//   console.log(innerWidth);
// }

// run();
//##########################################################
//Global scope variable
// const x = 100;
// console.log(x, 'in global');

// function run() {
//   //Access global variables inside a function
//   // console.log(innerWidth);
//   // console.log(x, 'in function');
// }

// run();
//##########################################################
//Function scope variable
const x = 100;
console.log(x, 'in global');

function run() {
  //Access global variables inside a function
  // console.log(innerWidth);
  // console.log(x, 'in function');
  // console.log(y); //Will result to an error
}

function add() {
  //variable shadowing - overwriting global variable
  const x = 1;
  const y = 50;
  console.log(y);
  console.log(x + y);
}

// console.log(y); //will result to an error
add();
run();
//##########################################################
//##########################################################
//##########################################################
//##########################################################
//##########################################################
//##########################################################
//##########################################################
//##########################################################
//##########################################################
//##########################################################
//##########################################################
