const API_KEY = '1b0d4e056d91c25a4fe8658fd55f3f06';

function getWeather() {
  const cityInput = document.getElementById('city-input');
  const city = cityInput.value.trim();

  if (city !== '') {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
      )
      .then((response) => {
        const weatherData = response.data;
        displayHourlyForecast(weatherData);
        displayWeeklyForecast(weatherData);
      })
      .catch((error) => {
        console.log(error);
        alert(
          'An error occurred while fetching the weather data. Please try again later.'
        );
      });
  }
}

function displayHourlyForecast(weatherData) {
  const hourlyForecastContainer = document.getElementById('hourly-forecast');
  hourlyForecastContainer.innerHTML = '';

  const hourlyData = weatherData.list.slice(0, 6);

  hourlyData.forEach((data) => {
    const timestamp = new Date(data.dt * 1000);
    const hour = timestamp.getHours();
    const temperature = data.main.temp.toFixed(1);
    const humidity = data.main.humidity;
    const pressure = data.main.pressure;
    const description = data.weather[0].description;

    const hourCard = document.createElement('div');
    hourCard.classList.add('hour-card');
    hourCard.innerHTML = `
    <h3>${hour}:00</h3>
    <p>Temperature: ${temperature}°C</p>
    <p>Humidity: ${humidity}%</p>
    <p>Pressure: ${pressure}hPa</p>
    <p>Description: ${description}</p>
    `;

    hourlyForecastContainer.appendChild(hourCard);
  });

  document.getElementById('weather-container').classList.remove('hidden');
}

function displayWeeklyForecast(weatherData) {
  const weeklyForecastTable = document.getElementById('weekly-forecast');
  weeklyForecastTable.innerHTML = '';

  const dailyData = weatherData.list.filter((data) =>
    data.dt_txt.includes('12:00:00')
  );

  dailyData.forEach((data) => {
    const timestamp = new Date(data.dt * 1000);
    const day = timestamp.toLocaleDateString('en-US', { weekday: 'long' });
    const temperature = data.main.temp.toFixed(1);
    const humidity = data.main.humidity;
    const pressure = data.main.pressure;
    const description = data.weather[0].description;

    const row = document.createElement('tr');
    row.innerHTML = `
  <td>${day}</td>
  <td>${temperature}°C</td>
  <td>${humidity}%</td>
  <td>${pressure}hPa</td>
  <td>${description}</td>
  `;

    weeklyForecastTable.appendChild(row);
  });
}
