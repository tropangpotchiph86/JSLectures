let x;

// //Coerced to a string
// x = 5 + '5'; //concatenate

// //coerced to a number
x = 5 + Number('5'); //10, number
x = 5 * '5';

//null is coerced to 0; o is falsy values
x = 5 + null; //5 number
x = Number(null); //0 number
x = Number(true); //1 number
x = Number(false); //0 number
x = 5 + false; //5 number
x = 5 + true; //6 number

//Undefined is coerced to 0 (falsy)
x = 5 + undefined; //NaN number

console.log(x, typeof x);
