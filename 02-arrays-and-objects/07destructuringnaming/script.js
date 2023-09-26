//Setting object properties with same name as a variable

// const firstName = 'Juan';
// const lastName = 'Dela Cruz';
// const age = 30;

// const person = {
//   firstName: firstName,
//   lastName: lastName,
//   age: age,
// };

// console.log(person.age);
//Output: 30 (age)
//##################################################
// const firstName = 'Juan';
// const lastName = 'Dela Cruz';
// const age = 30;

// const person = {
//   firstName,
//   lastName,
//   age,
// };

// console.log(person.age);

//this will give same output as the original
//##################################################
//Destructuring object properties
// const todo = {
//   id: 1,
//   title: 'Magluto ng Scrammble Egg',
//   user: {
//     name: 'Juan',
//   },
// };

// const id = todo.id;
// console.log(id);
//output is 1

//##################################################
//Destructuring the code above
// const todo = {
//   id: 1,
//   title: 'Magluto ng Scrammble Egg',
//   user: {
//     name: 'Juan',
//   },
// };

// const { id } = todo;
// console.log(id);
//same output 1 pa rin
//##################################################
//adding title to the output in the console log
// const todo = {
//   id: 1,
//   title: 'Magluto ng Scrammble Egg',
//   user: {
//     name: 'Juan',
//   },
// };

// // const { id, title } = todo;
// // console.log(id, title);

// const { id, title, user } = todo;
// console.log(user);

//##################################################
// const todo = {
//   id: 1,
//   title: 'Magluto ng Scrammble Egg',
//   user: {
//     name: 'Juan',
//   },
// };

// const {
//   id,
//   title,
//   user: { name },
// } = todo;
// console.log(name);

//##################################################
//rename keys
// const todo = {
//   id: 1,
//   title: 'Magluto ng Scrammble Egg',
//   user: {
//     name: 'Juan',
//   },
// };

// const {
//   id: todoId,
//   title,
//   user: { name },
// } = todo;
// console.log(todoId);

//##################################################
//Destructure arrays & using the rest/spread operator
const numbers = [23, 67, 33, 49, 52];

//to destructure arrays, we use brackets
// const [first, second] = numbers;
// console.log(first, second); //first 2 numbers

//using rest
const [first, second, ...rest] = numbers;
console.log(first, second, rest);

//##################################################
//##################################################
//##################################################
//##################################################
//##################################################
