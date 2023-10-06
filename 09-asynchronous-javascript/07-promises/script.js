// //basic syntax ng promise

// const promise = new Promise((resolve, reject) => {
//   //do some async task
//   setTimeout(() => {
//     console.log('Async Task complete');
//     resolve();
//   }, 3000);
// });

// //to handle the promise
// promise.then(() => {
//   console.log('Promise consumed.....');
// });

// //putting the .then in the promise
// new Promise((resolve, reject) => {
//   //do some async task
//   setTimeout(() => {
//     console.log('Async Task 2 complete');
//     resolve();
//   }, 1000);
// }).then(() => console.log('promise 2 consumed'));

// console.log('Hello from global scope');
//###############################################
//return a data from a promise
// new Promise((resolve, reject) => {
//   //do some async task
//   setTimeout(() => {
//     resolve({ name: 'Ryan', age: 42 });
//   }, 1000);
// }).then((user) => console.log(user));

// console.log('Hello from global scope');

//###############################################
//to handle errors:
const getUser = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ name: 'Ryan', age: 42 });
    } else {
      reject('Error: something went wrong');
    }
  }, 1000);
});

getUser.then((user) => console.log(user)).catch((error) => console.log(error));
//###############################################
//###############################################
//###############################################
//###############################################
