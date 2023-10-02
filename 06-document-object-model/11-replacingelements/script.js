//replaceWith() method

function replaceFirstItem() {
  const firstItem = document.querySelector('li:first-child');

  const li = document.createElement('li');
  li.textContent = 'Apple Pie';

  firstItem.replaceWith(li);
}

replaceFirstItem();

//another way to replace utilizing outerHTML
function replaceSecondItem() {
  const secondItem = document.querySelector('li:nth-child(2)');

  secondItem.outerHTML = '<li>Orange na Ponkan</li>';
}

replaceSecondItem();

//replacing them all utilizing outerHTML / innerHTML
// function replaceAllItems() {
//   const lis = document.querySelectorAll('li');

//   lis.forEach((item, index) => {
//     // item.outerHTML = '<li>Apple Pen</li>';
//     item.innerHTML = 'Apple Pie Pen';
//   });
// }

// replaceAllItems();

//###############################################
// modifying above code to replace all but with a different value for the second item

// function replaceAllItems() {
//   const lis = document.querySelectorAll('li');

//   lis.forEach((item, index) => {
//     // item.outerHTML = '<li>Apple Pen</li>';

//     if (index === 1) {
//       item.innerHTML = 'Ooohhh Apple Pen';
//     } else {
//       item.innerHTML = 'Apple Pie Pen ';
//     }
//   });
// }
//############################################
//refactoring
function replaceAllItems() {
  const lis = document.querySelectorAll('li');

  lis.forEach(
    (item, index) =>
      (item.outerHTML =
        index === 1 ? '<li>Ooohhh Apple Pen</li>' : '<li>Apple Pen</li>')
  );
}

replaceAllItems();
