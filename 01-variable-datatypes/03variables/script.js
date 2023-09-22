// Ways to Declare Variables
// var, let, const

let firstName = 'Juan';
const lastName = 'Cruz';

// console.log(firstName, lastName);

// let age = 30;
// console.log(age);

//Naming Conventions
// Only letters, numbers, underscores and dollar signs
// Cannot start with a number

//Multi-Word Formatting
// firstName = camelCase
// first_name = underscore
// FirstName = PascalCase - component lets say sa react
// firstname = lowercase

// lastName = 'Azur';
console.log(firstName, lastName);

let score;
score = 1;

if (true) {
  score = score + 1;
}

console.log(score);

//this will result to error because x is declared constant
// const x = 100;
// x = 200;
// console.log(x);

let score1;

const arr = [1, 2, 3, 4];
// arr = [1, 2, 3, 4, 5];

//solution is to use a method
arr.push(5);
console.log(arr);

// same goes with objects
const person = {
  name: 'Ryan',
};

person.name = 'Alden';
person.email = 'ryan@gmail.com';
console.log(person);

//Declare multiple values at one

let a, b, c;
const d = 10,
  e = 20,
  f = 30;

console.log(d);
console.log(a);
