import WeatherIcon from '../lvlup/weathericon.jsx';
import WeatherData from '../lvlup/weatherdata.jsx';
import WeatherDay from '../lvlup/weatherday.jsx';
import "./weather.css"

const Weather = ({ day, img, imgAlt, conditions, time }) => {
    return(
    <div className="container">
        <div className="weather">
            <WeatherDay day={day}/>
            <WeatherIcon img={img} imgAlt={imgAlt} />
            <WeatherData conditions={conditions} time={time} />
        </div>
    </div>
    )
}

export default Weather