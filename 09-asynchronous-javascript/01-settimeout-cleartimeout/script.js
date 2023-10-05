// setTimeout(function () {
//   console.log('Hello from callback');
// }, 0);

// console.log('Hello from global scope');
//##################################
//Named Function
// setTimeout(changeText, 4000);

// function changeText() {
//   document.querySelector('h1').textContent = 'Hello from callback';
// }

// console.log('Hello from global scope');

//##################################
//clear timeout

function changeText() {
  document.querySelector('h1').textContent = 'Hello from callback';
}

//clearTimeout()
const timerId = setTimeout(changeText, 3000);

document.querySelector('#cancel').addEventListener('click', () => {
  clearTimeout(timerId);
  console.log('Timer Cancelled');
});
//##################################
//##################################
//##################################
