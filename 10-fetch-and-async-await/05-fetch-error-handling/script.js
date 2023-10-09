// fetch('http://httpstat.us/404')
//   .then((response) => {

//     if (!response.ok) {
//       throw new Error('Request failed');
//     }
//     return response;
//   })
//   .then(() => {
//     console.log('success');
//   })
//   .catch((error) => {
//     console.log(error);
//   });
//#####################################
//getting specific errors:
fetch('http://httpstat.us/501')
  .then((response) => {
    if (response.status === 404) {
      throw new Error('Not Found');
    } else if (response.status === 500) {
      throw new Error('Internal Server Error');
    } else if (response.status !== 200) {
      throw new Error('Request failed');
    }

    return response;
  })
  .then(() => {
    console.log('success');
  })
  .catch((error) => {
    console.log(error);
  });
