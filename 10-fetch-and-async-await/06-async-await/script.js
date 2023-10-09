// // promise

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve({ name: 'Ryan', age: 40 });
//   }, 1000);
// });

// promise.then((data) => console.log(data)); //.then

// //using async await
// async function getPromise() {
//   const response = await promise;
//   console.log(response);
// }
// getPromise();

//fetching from an api
//https://jsonplaceholder.typicode.com/users
//using async await
// async function getUsers() {
//   const res = await fetch('https://jsonplaceholder.typicode.com/users');
//   const data = await res.json();

//   console.log(data);
// }
// getUsers();

//async await using arrow function
const getUsers = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();
  console.log(data);
};
getUsers();

//using .then
function getUsers2() {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.json())
    .then((data) => console.log(data));
}
getUsers2();
