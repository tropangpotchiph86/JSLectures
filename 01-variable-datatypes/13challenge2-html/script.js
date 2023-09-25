const x = Math.floor(Math.random() * 100 + 1);
const y = Math.floor(Math.random() * 50 + 1);

//Sum
const sum = x + y;
const sumOutput = `${x} + ${y} = ${sum}`;
console.log(sumOutput); // 31 + 15 = 46

//Difference
const diff = x - y;
const differenceOutput = `${x} - ${y} = ${diff}`;
console.log(differenceOutput); // 31 - 15 = 16

//Product
const prod = x * y;
const productOutput = `${x} * ${y} = ${prod}`;
console.log(productOutput); // 31 * 15 = 465

//Quotient
const quotient = x / y;
const quotientOutput = `${x} / ${y} = ${quotient}`;
console.log(quotientOutput); // 31 / 15 = 2.066666666666667

//Remainder
const rm = x % y;
const rmOutput = `${x} % ${y} = ${rm}`;
console.log(rmOutput); // 31 % 15 = 1
