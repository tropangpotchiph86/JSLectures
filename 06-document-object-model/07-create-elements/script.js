// createElement()

const div = document.createElement('div');
div.className = 'my-element';
div.id = 'my-element';
div.setAttribute('title', 'My Element');
// div.innerText = 'Sugo';

const text = document.createTextNode('Hello world');
div.appendChild(text);

// document.body.appendChild(div);
document.querySelector('ul').appendChild(div);
console.log(div);
