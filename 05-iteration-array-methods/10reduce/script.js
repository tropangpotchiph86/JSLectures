const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//Adds all numbers together

const sum = numbers.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);

console.log(sum);

//shorthen it using arrow function
const sum2 = numbers.reduce((acc, cur) => acc + cur, 10);
console.log(sum2);

//for loop
const sum3 = () => {
  let acc = 0;
  for (let i = 0; i < numbers.length; i++) {
    acc += numbers[i];
  }
  return acc;
};
console.log(sum3());

// foreach
const sum4 = () => {
  let acc = 0;
  numbers.forEach((cur) => {
    acc += cur;
  });
  return acc;
};
console.log(sum4());

//##################################################
//shopping cart
const cart = [
  { id: 1, name: 'Product 1', price: 150 },
  { id: 2, name: 'Product 2', price: 350 },
  { id: 3, name: 'Product 3', price: 180 },
];

// const total = cart.reduce(function (acc, product) {
//   return acc + product.price;
// }, 0);

// console.log(total);

//arrow function:
const total = cart.reduce((acc, product) => acc + product.price, 0);

console.log(total);
