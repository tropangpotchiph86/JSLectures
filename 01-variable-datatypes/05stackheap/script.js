//Value is stored in the stack
const fName = 'Juan';
const age = 30;

//Reference is stored in the heap
const person = {
  name: 'Benj',
  age: 42,
};

let newName = fName;
newName = 'JM';
console.log(fName, newName);

// console.log(name);
// console.log(age);
