const text = document.querySelector('p');
const itemList = document.querySelector('.item-list');
const items = itemList.querySelectorAll('li');

function run() {
  // console.log(1);
  // console.log(itemList.className);
  // console.log(text.className); //card
  // text.className = 'dark';
  // console.log(text.className); //card
  //classList - array of classes which also has methods to add, remove, toggle and replace
  // console.log(itemList.classList);
  // itemList.classList.forEach((c) => console.log(c));
  // text.classList.add('dark');
  // text.classList.toggle('dark');
  // text.classList.toggle('hidden'); //activate the class hidden
  // text.classList.replace('card', 'dark');

  itemList.style.lineHeight = '3';
  items.forEach((item, index) => {
    item.style.color = 'red';
    if (index === 2) {
      item.style.color = 'blue';
    }
  });
}

document.querySelector('button').onclick = run;
