// function getData(endpoint) {
//   const xhr = new XMLHttpRequest();

//   xhr.open('GET', endpoint);

//   xhr.onreadystatechange = function () {
//     if (this.readyState === 4 && this.status === 200) {
//       console.log(JSON.parse(this.responseText));
//     }
//   };

//   //random timer between 1 - 4 seconds
//   setTimeout(() => {
//     xhr.send();
//   }, Math.floor(Math.random() * 3000) + 1000);
// }

// getData('./movies.json');
// getData('./actors.json');
// getData('./directors.json');
//Output - randomize yung mga json sa console
//#######################################
//Having control of the output
function getData(endpoint, cb) {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', endpoint);

  xhr.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      cb(JSON.parse(this.responseText));
    }
  };

  //random timer between 1 - 4 seconds
  setTimeout(() => {
    xhr.send();
  }, Math.floor(Math.random() * 3000) + 1000);
}

// getData('./movies.json');
// getData('./actors.json');
// getData('./directors.json');

//Moview muna:
// getData('./movies.json', (data) => {
//   console.log(data);
// });

//movies, then actors
// getData('./movies.json', (data) => {
//   console.log(data);
//   getData('./actors.json', (data) => {
//     console.log(data);
//   });
// });

//movies, then actors, then directors
getData('./movies.json', (data) => {
  console.log(data);
  getData('./actors.json', (data) => {
    console.log(data);
    getData('./directors.json', (data) => {
      console.log(data);
    });
  });
});

//#######################################
//#######################################
//#######################################
//#######################################
//#######################################
