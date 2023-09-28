//if the counter(i) hits 15, mag stop na sya (break)
// for (let i = 0; i < 20; i++) {
//   if (i === 15) {
//     console.log('Breaking....');
//     break;
//   }
//   console.log(i);
// }

//Continue
for (let i = 0; i <= 20; i++) {
  if (i === 13) {
    console.log('Skipping 13 by the use of continue');
    continue;
  }
  console.log(i);
}
