//remove - is called on the element you want to remove
//remove child called on the parent element and pass the item you want to remove

// function removeClearButton() {
//   document.querySelector('#clear').remove();
// }

// removeClearButton();

//########################
//modifying to save it in a variable
// function removeClearButton() {
//   const clearBtn = document.querySelector('#clear');
//   clearBtn.remove();
// }

// removeClearButton();

//########################
//remove the apple:
// function removeFirstItem() {
//   const ul = document.querySelector('ul');
//   const li = document.querySelector('li:first-child');

//   ul.removeChild(li);
// }

// removeFirstItem();

//########################
function removeItem(itemNumber) {
  const ul = document.querySelector('ul');
  const li = document.querySelector(`li:nth-child(${itemNumber})`);

  ul.removeChild(li);
}

// removeItem(1);
// removeItem(2);

//########################
//utilizing queryselectorAll
function removeItem2(itemNumber) {
  const ul = document.querySelector('ul');
  const li = document.querySelectorAll('li')[itemNumber - 1];

  ul.removeChild(li);
}
// removeItem2(1);
//########################
//pano pag ayaw gamitin si parent
// function removeItem3(itemNumber) {
//   const li = document.querySelectorAll('li');
//   li[itemNumber - 1].remove();
// }

// removeItem3(1);
//########################
//shorten
const removeItem4 = (itemNumber) =>
  document.querySelectorAll('li')[itemNumber - 1].remove();

removeItem4(2);

//########################
//########################
//########################
//########################
//########################
//########################
//########################
//########################
