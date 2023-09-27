// Falsy Values
// - false
// - 0
// - '' or "" (Empty String)
// - null
// - undefined
// - NaN
// - if not false, then true

//Truthy Values
// - Everything else that is not falsy
// - true
// - ' ' (space in a string)
// - 'false' (false in a string)
// - [] (empty array)
// - {} (empty object)
// - function () {} (empty function)

//##################################################
// const email = 'test@test.com';

// if (email) {
//   console.log('You passed in an email');
// }
// console.log(Boolean(email));
//##################################################
const x = function () {};

if (x) {
  console.log('This is truthy');
} else {
  console.log('This is falsy');
}

console.log(Boolean(x));
//##################################################
//area of confusion || caveats
const children = 1;

// if (children) {
//   console.log(`You have ${children} children`);
// } else {
//   console.log('Please enter number of children');
// }
//0 is falsy values

//Solution
if (!isNaN(children)) {
  console.log(`You have ${children} children`);
} else {
  console.log('Please enter number of children');
}
//##################################################
//empty array
const posts = [];

// if (posts) {
//   console.log('List Posts');
// } else {
//   console.log('No Posts To List');
// }
//empty array dapat ang ipapakita is 'No Posts To List'
//Solution:
if (posts.length > 0) {
  console.log('List Posts');
} else {
  console.log('No Posts To List');
}
//##################################################
//empty objects
const user = {};

// if (user) {
//   console.log('List User');
// } else {
//   console.log('No User');
// }

//pag empty ang object, nililist pa rin nya, dapat lalabas is No User
//Solution
// console.log(user.length);
if (Object.keys(user).length > 0) {
  console.log('List User');
} else {
  console.log('No User');
}

//Loose Equality
console.log(false == 0); //true
console.log('' == 0); //true
console.log(null == undefined); //true

//Strict Equality
console.log(false === 0); //false
console.log('' === 0); //false
console.log(null === undefined); //false
