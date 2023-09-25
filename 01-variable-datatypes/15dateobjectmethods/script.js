let x;
// let d = new Date();
let d = new Date('1990-04-10');

//Date methods
//string representation of a date

x = d.toString();

//timestamp
x = d.getTime();
x = d.valueOf();

//Year
x = d.getFullYear();

//Month
x = d.getMonth() + 1;

//Day of the month
x = d.getDate();

//Days of the week
x = d.getDay();
x = d.getHours();
x = d.getMinutes();
x = d.getSeconds();
x = d.getMilliseconds();

//construct data from this methods
x = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;

//API for time zones
// Intl.DateTimeFormat API (locale specific)
// x = Intl.DateTimeFormat('en-US').format(d);
x = Intl.DateTimeFormat('en-GB').format(d);
x = Intl.DateTimeFormat('default').format(d);

//long format
x = Intl.DateTimeFormat('default', { month: 'long' }).format(d);

//short format
x = Intl.DateTimeFormat('default', { month: 'short' }).format(d);

x = d.toLocaleString('default', {
  weekday: 'long',
  // year: 'numeric',
  // month: 'long',
  // day: 'numeric',
  // hour: 'numeric',
  // minute: 'numeric',
  // second: 'numeric',
  timeZone: 'Singapore',
  // timeZone: 'America/New_York',
});
console.log(x);
