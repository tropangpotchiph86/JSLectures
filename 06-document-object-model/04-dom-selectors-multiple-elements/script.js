// querySelectorAll() - a method which returns a NodeList of all elements within the document that match the specified CSS selector. If no matches found, it returns an empty NodeList

const listItems = document.querySelectorAll('.item');
console.log(listItems);

//Access elements by index
console.log(listItems[1]);
//innerText
console.log(listItems[1].innerText);

//setting a color
// listItems.style.color = 'red'; //this will give an error
// listItems[1].style.color = 'red';

//all of them, convert to red color
//forEach -higher array method
// listItems.forEach((item) => {
//   item.style.color = 'red';
// });

//removing the element with index 1
// listItems.forEach((item, index) => {
//   item.style.color = 'red';

//   if (index === 1) {
//     item.remove();
//   }
// });

//
listItems.forEach((item, index) => {
  item.style.color = 'red';

  if (index === 1) {
    item.remove();
  }

  //eto walang x button
  // if (index === 0) {
  //   item.innerText = 'Oranges';
  // }

  //fixing the issue with the comment button
  if (index === 0) {
    item.innerHTML = `Oranges
    <button class="remove-item btn-link text-red">
      <i class="fa-solid fa-xmark"></i>
    </button>`;
  }
});

//getElementsByClassName()
const listItems2 = document.getElementsByClassName('item');

console.log(listItems2);
console.log(listItems2[2].innerText);

const listItemsArray = Array.from(listItems2);
listItemsArray.forEach((item) => {
  console.log(item.innerText);
});

//getElementsByTagname
const listItems3 = document.getElementsByTagName('li');
console.log(listItems3);
console.log(listItems3[0].innerText);
