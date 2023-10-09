axios
  .get('https://jsonplaceholder.typicode.com/users')
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => console.error('An error occurred:', error));
