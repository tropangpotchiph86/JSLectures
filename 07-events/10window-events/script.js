//On Page Load
// document.querySelector('h1').textContent = 'Hello World';

// window.onload = function () {
//   document.querySelector('h1').textContent = 'Hello World';
// };

// window.addEventListener(
//   'load',
//   () => (document.querySelector('h1').textContent = 'Hello World')
// );

//DOM Content load DOM Load
// window.addEventListener(
//   'DOMContentLoaded',
//   () => (document.querySelector('h1').textContent = 'Hello World')
// );

//####################################################
// window.addEventListener('load', () => console.log('Page Loaded'));

// window.addEventListener('DOMContentLoaded', () => console.log('DOM Loaded'));

// console.log('Hello World');

// document.querySelector('h1').textContent = 'Hello World';

//Resize Event
window.addEventListener('resize', () => {
  document.querySelector(
    'h1'
  ).innerText = `Resized to ${window.innerWidth} x ${window.innerHeight}`;
});

//Scroll event
// window.addEventListener('scroll', () =>
//   console.log(`Scrolled: ${window.scrollX} x ${window.scrollY}`)
// );

window.addEventListener('scroll', () => {
  if (window.scrollY > 70) {
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
  } else {
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
  }
  console.log(`Scrolled: ${window.scrollX} x ${window.scrollY}`);
});

//Focus & Blur Events
window.addEventListener('focus', () => {
  document.querySelectorAll('p').forEach((p) => {
    p.style.color = 'blue';
  });
});

window.addEventListener('blur', () => {
  document.querySelectorAll('p').forEach((p) => {
    p.style.color = 'black';
  });
});
