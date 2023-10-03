const logo = document.querySelector('img');

//Functions
const onClick = () => console.log('click event');
// const onDoubleClick = () => console.log('double click event');
const onDoubleClick = () => {
  if (document.body.style.backgroundColor !== 'pink') {
    document.body.style.backgroundColor = 'pink';
    document.body.style.color = 'white';
  } else {
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
  }
};
const onRightClick = () => console.log('right click event');
const onMouseDown = () => console.log('mouse down event');
const onMouseUp = () => console.log('mouse up event');
const onMouseWheel = () => console.log('mouse wheel event');
const onMouseOver = () => console.log('mouse over event');
const onDragStart = () => console.log('drag start event');
const onDrag = () => console.log('drag event');
const onDragEnd = () => console.log('drag end event');

//Event listeners
// logo.addEventListener('click', onClick); //Single Left Click
// logo.addEventListener('dblclick', onDoubleClick); //Double Click
// logo.addEventListener('contextmenu', onRightClick); //Right Click
// logo.addEventListener('mousedown', onMouseDown); //Click and Hold
// logo.addEventListener('mouseup', onMouseUp); //Click and Hold
// logo.addEventListener('wheel', onMouseWheel); //Wheel ng mouse
// logo.addEventListener('mouseover', onMouseOver); //Wheel ng mouse
logo.addEventListener('dragstart', onDragStart);
logo.addEventListener('drag', onDrag);
logo.addEventListener('dragend', onDragEnd);
