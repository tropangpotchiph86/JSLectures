let output;

const parent = document.querySelector('.parent');
output = parent.children; //output all the child
output = parent.children[1]; //2nd child
// output = parent.children[1].innerText; //innertext of 2nd child
// output = parent.children[1].className; //className of 2nd child -- child
// output = parent.children[1].nodeName; //nodeName of 2nd child -- div

output = parent.children[1].innerText = 'Child Two'; //Child Two
output = parent.children[1].style.color = 'red'; //Child Two

// console.dir(output);

//firstElementChild & lastElementChild
parent.firstElementChild.innerText = 'Child One';
parent.lastElementChild.innerText = 'Child Three';

//Get parent elements from a child
const child = document.querySelector('.child');
output = child.parentElement; //class lang ng parent

child.parentElement.style.border = '1px solid #ccc';
child.parentElement.style.padding = '10px';

const h1Element = document.querySelector('h1');
h1Element.style.border = '1px solid #ccc';
h1Element.style.padding = '10px';

//CSS - Pseudo selector
const secondItem = document.querySelector('.child:nth-child(2)');

secondItem.nextElementSibling.style.color = 'pink';
secondItem.previousElementSibling.style.color = 'blue';
output = secondItem;

console.log(output);
