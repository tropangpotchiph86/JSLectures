//Strings are primitive but you can use methods in it because JS is using a wrapper so that you can use this methods

let x;

const name = 'Ryan';
const age = 42;

//concatenation
x = 'Hello, my name is ' + name + ' and I am ' + age + ' years old';

//Template Literals or template strings ES6 (ES2015)
x = `Hello, my name is ${name} and I am ${age} years old`;

//String Properties and methods
// Creating a "string object" (JS does this automatically when using property or methods on a primitive string)

const s = new String('Hello World');
x = typeof s;

x = s.length;

//Access value by key
x = s[6];

//shows the prototype of the string object.
// x = s.__proto__;

//returns the character at the specified index
// x = s.charAt(6);

//returns the index of the first occcurence of a specified value in a string
x = s.indexOf('d');

//search a string for a specified value
x = s.substring(2, 5); //llo
x = s.substring(7); // orld; simula hanggang sa dulo ng walang hanggan

//slice() - extracts a part of a string and returns a new string
x = s.slice(0, 5); // Hello
x = s.slice(-11, -6); // Hello
x = s.slice(-11); // Hello World

//trim() - removes white space from beginning and end of a string
x = '             Hello World    ';
x = x.trim();

//replace() - replace all instances of a string
x = s.replace('World', 'Ms. Camz'); //Hello Ms. Camz

//includes() returns true if the string is found
x = s.includes('Hell');

//valueOf() - return the primtive value of a variable
x = s.valueOf();

//split() - returns an array of strings
x = s.split('');
console.log(x);
