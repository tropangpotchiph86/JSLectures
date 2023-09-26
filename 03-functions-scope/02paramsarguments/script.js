// function registerUser(user) {
//   return user + ' is registered';
// }

// console.log(registerUser('Ryan'));
// console.log(registerUser());
//######################################################
//Default Params
//Old ways (ES5)
// function registerUser(user) {
//   if (!user) {
//     user = 'Robot';
//   }
//   return user + ' is registered';
// }

// // console.log(registerUser('Ryan'));
// console.log(registerUser());

//ES6

function registerUser(user = 'Robot2') {
  return user + ' is registered';
}

// console.log(registerUser('Ryan'));
// console.log(registerUser('Poge'));

//######################################################
//Rest params
function sum(...numbers) {
  let total = 0;

  for (const num of numbers) {
    total += num; //total = total + num
  }

  return total;
}

console.log(sum(1, 2, 3, 4, 5, 6, 100));
//######################################################
//object as params
function loginUser(user) {
  return `The user ${user.name} with the id of ${user.id} is logged in`;
}

const user = {
  id: 1,
  name: 'Alden',
};

console.log(loginUser(user));

console.log(loginUser({ id: 2, name: 'Catcat' }));
//######################################################
//Arrays as params
//get a random numbers from an array
// function getRandom(arr) {
//   const randomIndex = Math.floor(Math.random() * arr.length);

//   const item = arr[randomIndex];

//   console.log(item);
// }

// getRandom([11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]);

//######################################################
//implementing the above using spread operator
function getRandom(...arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);

  const item = arr[randomIndex];

  console.log(item);
}

getRandom('Sheen', 'Tomenio', 'Geoff');
