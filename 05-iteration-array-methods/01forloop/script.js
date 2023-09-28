// for ([initialExpression]; [conditionExpression]; [incrementExpression])
//   statement;

// INITITAL EXPRESSION - Initializes a variable/counter
// CONDITION EXPRESSION - Condition that the loop will continue to run as long as it is met or until the condition is false
// INCREMENT EXPRESSION - Expression that will be executed after each iteration of the loop. Usually increments the variable
// STATEMENT - Code that will be executed each time the loop is run. To execute a `block` of code, use the `{}` syntax

// for (let index = 0; index < array.length; index++) {
//   const element = array[index];
// }

//Output: Number 'i' where i is 0 to 9
// for (let i = 0; i < 10; i++) {
//   console.log('Number ' + i);
// }

//Number 1 to 10, pero pag 7: '7 is my lucky number'
// for (let i = 1; i <= 10; i++) {
//   if (i === 7) {
//     console.log('7 is my lucky number');
//   } else {
//     console.log('Number ' + i);
//   }
// }

//Nested Loops
//  Number 1 -ok
//  1 * 1 = 1           i * j =
//  1 * 2 = 2
//  1 * 3 = 3
//  1 * 4 = 4
//  1 * 5 = 5
//  Number 2 -ok
//  2 * 1 = 2
//  2 * 2 = 4
//  2 * 3 = 6
//  2 * 4 = 8
//  2 * 5 = 10
// ..... Number 10

// for (let i = 1; i <= 10; i++) {
//   console.log('Number ' + i);
//   for (let j = 1; j <= 5; j++) {
//     console.log(`${i} * ${j} = ${i * j}`);
//   }
// }

//Looping through an Array
const names = ['Ryan', 'Pau', 'Alden', 'Cat', 'Dianne', 'JM'];
//i=0 hanggang i < 6; i++

//mano mano
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);
console.log(names[4]);
console.log(names[5]);

//loop
for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}

//foreach
names.forEach((name) => {
  console.log(name);
});

//if value of the array is Pau, then output: 'Pau is the boss'
// for (let i = 0; i < names.length; i++) {
//   if (names[i] === 'Pau') {
//     console.log(names[i] + ' is the boss');
//   } else {
//     console.log(names[i]);
//   }
// }
