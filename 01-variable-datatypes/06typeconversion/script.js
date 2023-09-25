//Type Conversion is converting a value from one type to another

let amount = 'hello';

//Convert string to number
amount = parseInt(amount);
// amount = +amount;
// amount = Number(amount);

//Convert number to string
// amount = amount.toString();
amount = String(amount);

//Convert string to decimal
amount = parseFloat(amount);
// amount = parseInt(amount);

//Convert number to Boolean
amount = Boolean(amount);

//Ways to get a NaN- amount: 'hello'
amount = parseInt(amount);
console.log(Math.sqrt(-1));
console.log(undefined + undefined);
console.log(1 + NaN);
console.log('foo' / 3);

console.log(amount, typeof amount);
