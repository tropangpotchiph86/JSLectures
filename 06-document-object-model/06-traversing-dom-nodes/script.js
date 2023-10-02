let output;

//get child nodes
const parent = document.querySelector('.parent');
output = parent.childNodes;
// output = parent.childNodes[0].textContent; //white space
// output = parent.childNodes[0].nodeName; //#text
// output = parent.childNodes[3].nodeName; //#text
// output = parent.childNodes[3].textContent; //child 1
// output = parent.childNodes[3].innerHTML; //child 1
// output = parent.childNodes[3].outerHTML; //<div class="child">Child 1</div>

// //change child 1 to child One
// output = parent.childNodes[3].textContent = 'Child One';
// //change the color of child 2
// output = parent.childNodes[5].style.color = 'red';

// //firstchild a& lastchild
// output = parent.firstChild; //#text
// output = parent.lastChild; //#text

// parent.lastChild.textContent = 'Hello'; //yung white space naging hello

//Get parent node

const child = document.querySelector('.child');

//to get the parent node
output = child.parentNode; //div.parent
output = child.parentElement; //div.parent

// styling
child.parentNode.style.backgroundColor = '#ccc';
child.parentNode.style.padding = '1rem';

//Get sibling nodes
const secondItem = document.querySelector('.child:nth-child(2)');
output = secondItem.nextSibling; // #text (because of the white space)
output = secondItem.previousSibling; // #text (because of the white space)

console.log(output);
