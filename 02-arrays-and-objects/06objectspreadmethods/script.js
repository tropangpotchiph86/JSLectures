// let x;

// const todo = {};

// todo.id = 1;

// x = todo;
// console.log(x);

//Using object constructor
let x;

const todo = new Object();

todo.id = 1;
todo.name = 'Buy Binatog';
todo.completed = false;

x = todo;

//Object Nesting
const person = {
  address: {
    coords: {
      lat: 42.7362,
      lng: -54.3453,
    },
  },
};

//access the latitude
x = person.address.coords.lat;

//Spread Operator in objects
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

//nesting
// const obj3 = { obj1, obj2 };

//spread operator to combine them
// const obj3 = { ...obj1, ...obj2 };

//using assign (oldies, before ES6)
const obj4 = Object.assign({}, obj1, obj2);

//Array of objects
const todos = [
  { id: 1, name: 'Bili Monay at Itlog' },
  { id: 2, name: 'Luto ng scramble egg' },
  { id: 3, name: 'Timpla kape' },
];

//to access specific objects

x = todos;
x = todos[2];
x = todos[2].name;

//Get array of object keys
x = Object.keys(todo);

//Get length of an object
// x = todo.length; //mali kasi ito
x = Object.keys(todo).length;

//Get array of object values
x = Object.values(todo);

//Get array of object key/value pairs
x = Object.entries(todo);

//check if object has  a property
x = todo.hasOwnProperty('name');

console.log(x);
