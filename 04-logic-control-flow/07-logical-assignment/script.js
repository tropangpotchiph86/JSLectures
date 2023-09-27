// ||= assigns the right side value only if the left is a falsy value.
let a = false;

// if (!a) {
//   a = 10;
// }

//shorthand using or operator
// a = a || 10; //if a is falsy, assign the right

//assignment operator
a ||= 10;

console.log(a);

// &&= assigns the right side value only if the left is a truthy value.

let b = 20;
// if (b) {
//   b = 20;
// }
//logical operator
// b = b && 20;

//assignment operator
b &&= 20;

console.log(b);

// // ??= assigns the right side value only if the left is null or undefined.
let c = null;

// if (c === null || c === undefined) {
//   c = 30;
// }

//logical operator
// c = c ?? 30;

//assignment operator
c ??= 30;

console.log(c);
