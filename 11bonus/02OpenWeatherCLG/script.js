const apiKey = '1b0d4e056d91c25a4fe8658fd55f3f06';
const city = 'Baguio';
const lat = '16.4023';
const lon = '120.5960';

const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

axios
  .get(url)
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => console.error('An error occurred:', error));

//#################################

const url2 = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;

axios
  .get(url2)
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => console.error('An error occurred:', error));
