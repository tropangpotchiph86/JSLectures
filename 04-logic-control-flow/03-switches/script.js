const d = new Date(2022, 0, 29, 18, 0, 0);
const hour = d.getHours();
const month = d.getMonth();

//Immediate value evaluation
switch (month) {
  case 0:
    console.log('It is January');
    break;
  case 1:
    console.log('It is February');
    break;
  case 2:
    console.log('It is March');
    break;
  case 3:
    console.log('It is April');
    break;
  case 4:
    console.log('It is May');
    break;
  default:
    console.log('It is not the first half of the year');
}

//Range evaluation
switch (true) {
  case hour < 12:
    console.log('Good morning');
    break;
  case hour < 18:
    console.log('Good Afternoon');
    break;
  default:
    console.log('Good night');
}
