// function onClear() {
//   alert('Clear items from function');
// }

//1st method mixing up event listener with html
// 2nd method of utilizing event listener inline event listener
// const clearBtn = document.querySelector('#clear');

//JS Event Listener
// clearBtn.onclick = function () {
//   alert('Clear Itemssssss');
// };

//Third and modern way

// clearBtn.addEventListener('click', function () {
//   alert('Clear Items');
// });

//Short version using
// clearBtn.addEventListener('click', () => alert('Clear Items using Arrow'));

//Multiple events

// clearBtn.onclick = function () {
//   alert('Clear Itemssssss');
// };

// clearBtn.onclick = function () {
//   console.log('Clear Itemssssss');
// };

// clearBtn.addEventListener('click', () => alert('Clear Items using Arrow'));
// clearBtn.addEventListener('click', () => console.log('Clear items'));

// setTimeout(() => clearBtn.removeEventListener('click', onClear), 5000);

//recitation - macleclear yung ul, kapag nagclick ng Clear All na button
const clearBtn = document.querySelector('#clear');

function onClear() {
  //Quick and Dirty
  // const itemList = document.querySelector('ul');
  // itemList.innerHTML = '';

  //foreach
  // const itemList = document.querySelector('ul');
  // const items = itemList.querySelectorAll('li');
  // console.log(items);
  // items.forEach((item) => item.remove());

  //while (for me)
  const itemList = document.querySelector('ul');
  const items = itemList.querySelectorAll('li');
  while (itemList.firstChild) {
    itemList.removeChild(itemList.firstChild);
  }
}
clearBtn.addEventListener('click', onClear);
