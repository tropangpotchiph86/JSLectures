const x = 100;
let foo = 1;
var bar = 2;

if (true) {
  // console.log(x);
  const y = 200;
  // console.log(x + y);
}

// console.log(x + y);

//#################################
// A loop is a block
// for (let i = 0; i < 10; i++) {
//   // console.log(i);
// }
// // console.log(i);

//#################################
// if (true) {
//   const a = 500;
//   let b = 600;
//   var c = 700;
// }
// // console.log(a); //error kasi di mo ma aaccess yung const sa loob ng block scope
// // console.log(b); //wag makulit error nga kasi nasa loob ng block scope
// console.log(c);

for (var i = 0; i < 10; i++) {
  // console.log(i);
}
// console.log(i);

//#######################################
//var is function scoped
function run() {
  var d = 100;
  // console.log(d);
}

run();
// console.log(d);
