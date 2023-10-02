//insertAdjacentElement Example
function insertElement() {
  const filter = document.querySelector('.filter');

  const h1 = document.createElement('h1');
  h1.textContent = 'insertAdjacentElement';

  filter.insertAdjacentElement('afterend', h1);
}
insertElement();

//insertAdjacentText Example
function insertText() {
  const item = document.querySelector('li:first-child');

  item.insertAdjacentText('afterend', 'insertAdjacentText');
}
insertText();
//insertAdjacentHTML example
function insertHTML() {
  const clearBtn = document.querySelector('#clear');

  clearBtn.insertAdjacentHTML('afterend', '<h2>insertAdjacentHTML</h2>');
}
insertHTML();

//insert Before Example

function insertBeforeItem() {
  const ul = document.querySelector('ul');

  const li = document.createElement('li');
  li.textContent = 'insertBefore';

  const thirdItem = document.querySelector('li:nth-child(3)');

  ul.insertBefore(li, thirdItem);
}

insertBeforeItem();

//#######################################
/* <!-- beforebegin -->
<p>
<!-- afterbegin -->

    //foo

    <!-- before end -->
</p>
<!-- afterend -->
 */
