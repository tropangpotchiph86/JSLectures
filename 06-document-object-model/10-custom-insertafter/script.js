function insertAfter(newEl, existingEl) {
  // console.log(existingEl.parentElement); //ul
  // console.log(existingEl.parentNode); //ul

  existingEl.parentElement.insertBefore(newEl, existingEl.nextSibling);
}

// New element to insert
const li = document.createElement('li');
li.textContent = 'Insert Me After!';

// Existing element to insert after
const firstItem = document.querySelector('li:first-child');

// Our custom function
insertAfter(li, firstItem);
