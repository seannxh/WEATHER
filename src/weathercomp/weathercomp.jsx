import WeatherIcon from '../lvlup/weathericon.jsx';
import WeatherData from '../lvlup/weatherdata.jsx';
import "./weather.css"

const Weather = ({ day, img, imgAlt, conditions, time }) => {
    return(
    <div className="container">
        <div className="weather">
            <WeatherIcon img={img} imgAlt={imgAlt} />
            <WeatherData day={day} conditions={conditions} time={time} />
        </div>
    </div>
    )
}

export default Weather