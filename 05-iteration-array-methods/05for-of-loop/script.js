//loop through arrays
const items = [' book', 'table', 'chair', 'kite'];

//old ways using for loop
// for (let i = 0; i < items.length; i++) {
//   console.log(items[i]);
// }

//use for of
for (const item of items) {
  console.log(item);
}

//array of objects
const users = [{ name: 'Ryan' }, { name: 'Alden' }, { name: 'Catcat' }];

//forof in the array of objects
for (const user of users) {
  console.log(user);
}

//to access specific property
for (const user of users) {
  console.log(user.name);
}

//loop over strings
const str = 'Hello World';

for (const letter of str) {
  console.log(letter);
}

//Loop over Maps
const map = new Map();
map.set('name', 'Ryan');
map.set('age', 41);

for (const [key, value] of map) {
  console.log(key, value);
}
