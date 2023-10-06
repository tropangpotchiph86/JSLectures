// fetch('./movies.json').then((response) => {
//   console.log(response);
// });

//##################################################
//Fetch a JSON file
// fetch('./movies.json')
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   });

//##################################################
//refactoring
// fetch('./movies.json')
//   .then((response) => response.json())
//   .then((data) => console.log(data));

// //##################################################
// //Fetching a text
// fetch('./test.txt')
//   .then((response) => response.text())
//   .then((data) => console.log(data));
//##################################################
//Fetching from an API
fetch('https://jsonplaceholder.typicode.com/todos')
  .then((response) => response.json())
  .then((data) => console.log(data));
//##################################################
// fetch('https://api.github.com/users/tropangpotchiph86')
//   .then((response) => response.json())
//   .then((data) => console.log(data));
//##################################################
// fetch('https://api.github.com/users/tropangpotchiph86')
//   .then((response) => response.json())
//   .then((data) => (document.querySelector('h1').textContent = data.login));
