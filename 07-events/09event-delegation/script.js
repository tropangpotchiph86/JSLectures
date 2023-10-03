//Add an event listener on all items

// const listItems = document.querySelectorAll('li');
// listItems.forEach((item) => {
//   item.addEventListener('click', (e) => {
//     // console.log(e.target);
//     e.target.remove();
//   });
// });

//Event Delegation
const list = document.querySelector('ul');
const listItems = document.querySelectorAll('li');

//Add a single event listener on the parent (Event Delegation)
list.addEventListener('click', (e) => {
  if (e.target.tagName === 'LI') {
    e.target.remove();
  }
});

// list.addEventListener('mouseover', (e) => {
//   if (e.target.tagName === 'LI') {
//     e.target.style.color = 'pink';
//   }
// });
