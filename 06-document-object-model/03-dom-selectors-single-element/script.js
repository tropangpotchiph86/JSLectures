// document.getElementById()

console.log(document.getElementById('app-title'));

//Get Attributes
console.log(document.getElementById('app-title').id);
console.log(document.getElementById('app-title').className);
console.log(document.getElementById('app-title').getAttribute('id'));

//Set Attribute

// document.getElementById('app-title').id = 'new-id';
// document.getElementById('app-title').title = 'Shopping List ko';
document.getElementById('app-title').setAttribute('class', 'title');

const title = document.getElementById('app-title');
// console.log(title);

//Get/change the content
console.log(title);
console.log(title.textContent); //Shopping List
title.textContent = 'Hello World';
title.innerText = 'Hello World Inner';
title.innerHTML = '<strong> Shopping List </strong>';

//changing styles
title.style.color = 'red';
title.style.backgroundColor = 'black';
title.style.padding = '10px';
title.style.borderRadius = '10px';

//document.querySelector()
//Use any css selector
console.log(document.querySelector('h1'));
//by id
console.log(document.querySelector('#app-title'));
//by class
console.log(document.querySelector('.container'));
//by attributes
console.log(document.querySelector('input[type="text"]'));
//pseudo selector
console.log(document.querySelector('li:nth-child(2)').innerText);

//orange juice --> apple juice
const secondItem = document.querySelector('li:nth-child(2)');
secondItem.innerText = 'Apple Juice';
secondItem.style.color = 'pink';

//kunin yung UL
const list = document.querySelector('ul');
console.log(list);

//kunin yung List
const firstItem = list.querySelector('li');
firstItem.style.color = 'blue';
