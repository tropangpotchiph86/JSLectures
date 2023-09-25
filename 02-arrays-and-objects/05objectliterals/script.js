let x;

//creating an object

const person = {
  name: 'Juan Dela Cruz',
  age: 19,
  isAdmin: true,
  address: {
    street: '143 Paghanapin St.',
    barangay: 'Salawag',
    city: 'Bacoor',
  },
  hobbies: ['music', 'sports'],
};

//access object properties
x = person.name; //Dot notation
x = person['age']; // Bracket Notation
x = person.address.barangay;
x = person.hobbies[0];

//Update properties
person.name = 'Maria Clara';
person['isAdmin'] = false;

//deleting properties
delete person.age;

//create new properties
person.hasChildren = true;

//Add functions
person.greet = function () {
  console.log(`Hello, my name is ${this.name}`);
};

person.greet();

const person2 = {
  'first name': 'Crisostomo',
  'last name': 'Ibarra',
};

x = person2['first name'];

console.log(x);
