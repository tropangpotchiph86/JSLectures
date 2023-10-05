// const intervalID = setInterval(myCallback, 1000, 'Hello');

// function myCallback(a) {
//   console.log(a, Date.now());
// }

// function stopChange() {
//   clearInterval(intervalID);
// }

// document.getElementById('stop').addEventListener('click', stopChange);

//color gawing black and white
// let intervalID;

// function startChange() {
//   if (!intervalID) {
//     intervalID = setInterval(changeColor, 1000);
//   }
// }

// function stopChange() {
//   clearInterval(intervalID);
// }

// function changeColor() {
//   if (document.body.style.backgroundColor !== 'black') {
//     document.body.style.backgroundColor = 'black';
//     document.body.style.color = 'white';
//   } else {
//     document.body.style.backgroundColor = 'white';
//     document.body.style.color = 'black';
//   }
// }

// document.getElementById('start').addEventListener('click', startChange);
// document.getElementById('stop').addEventListener('click', stopChange);

//##############################
//random colors:
let intervalID;

function startChange() {
  if (!intervalID) {
    intervalID = setInterval(changeRandomColor, 1000);
  }
}

function stopChange() {
  clearInterval(intervalID);
}

function changeRandomColor() {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = `#${randomColor}`;
}

document.getElementById('start').addEventListener('click', startChange);
document.getElementById('stop').addEventListener('click', stopChange);
