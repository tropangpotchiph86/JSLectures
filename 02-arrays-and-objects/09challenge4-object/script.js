const library = [
  {
    title: 'Harry Potter',
    author: 'JK Rowling',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: 'Mockingjay',
    author: 'Suzanne Collins',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: 'Twilight',
    author: 'Ryan Azur',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
];

//Step 2
library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

//Step 3
const { title: firstBook } = library[0];
console.log(firstBook);

//Step 4
const libraryJSON = JSON.stringify(library);
console.log(libraryJSON);
