import Weather from "./weathercomp/weathercomp.jsx"
import WeatherIcon from "./lvlup/weathericon.jsx"
import WeatherData from "./lvlup/weatherdata.jsx"

const App = () => {

  const weatherForecasts = [
    {
      day: 'Mon',
      img: 'http://res.cloudinary.com/jkeohan/image/upload/v1535732381/day.svg',
      imgAlt: 'sun icon',
      conditions: 'sunny',
      time: 'Morning',
    },
    {
      day: 'Tue',
      img: 'http://res.cloudinary.com/jkeohan/image/upload/v1535732381/night.svg',
      imgAlt: 'moon icon',
      conditions: 'clear',
      time: 'Night',
    },
    {
      day: 'Wed',
      img: 'http://res.cloudinary.com/jkeohan/image/upload/v1535732381/stormy.svg',
      imgAlt: 'clouds with lightning icon',
      conditions: 'stormy',
      time: 'All Day',
    },
    {
      day: 'Thu',
      img: 'http://res.cloudinary.com/jkeohan/image/upload/v1535732381/cloudy-day_t7ckxp.svg',
      imgAlt: 'sun overcast by clouds icon',
      conditions: 'overcast',
      time: 'Evening',
    },
    {
      day: 'Fri',
      img: 'http://res.cloudinary.com/jkeohan/image/upload/v1535732381/cloudy-night.svg',
      imgAlt: 'moon overcast by clouds icon',
      conditions: 'cloudy',
      time: 'Night',
    },
  ];
  
  return (
    <div className="main-container">
      <h1 className="weather-heading">Local Weather</h1>
      <div className="weather-container">
        <section>
          {weatherForecasts.map((weather, index) => (
            <Weather
              key={index}
              day={weather.day}
              img={weather.img}
              imgAlt={weather.imgAlt}
              conditions={weather.conditions}
              time={weather.time}
            />
          ))}
        </section>
      </div>
    </div>
  );  
}

export default App
