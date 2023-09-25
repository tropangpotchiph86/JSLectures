let d;

//Get todays date and time

d = new Date();

//Set to a string
d = d.toString();

//Get a specific date | Month is 0-based so 0 is January
d = new Date(2021, 8, 10, 12, 30, 45);

d = new Date('2021-07-10T12:30');
d = new Date('07/10/2021 12:30:00');
d = new Date('07-10-2021'); //mag ingat kasi baka ma off ka ng isang araw
// https://stackoverflow.com/questions/7556591/is-the-javascript-date-object-always-one-day-off

// console.log(d);
// console.log(typeof d);

///#######################################
//To demonstrate yung one day off
// const dateStr = '2022-07-08T06:25:13';

// //Create a Date object with the specified date string
// const d = new Date(dateStr);

// //Define the time zone (Eastern Daylight Time)
// const timeZone = 'America/New_York';

// const formattedDate = d.toLocaleString('en-US', { timeZone });

// // console.log(d);
// console.log(formattedDate);
// // console.log(typeof d);

//#############################

//Get the current time stamp | January 1 1970
d = Date.now();

//Get the timestamp of a specific Date
d = new Date('04-29-1981 11:30:45');
d = d.getTime();
d = d.valueOf();

//Create a date from a timestamp
d = new Date(857362845030);

d = Math.floor(Date.now() / 1000);

console.log(d);
