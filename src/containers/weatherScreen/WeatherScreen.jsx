import { ActionBar } from "../../components/weather-screen/action-bar/ActionBar";
import { CurrentWeather } from "../../components/weather-screen/current-weather/CurrentWeather";
import { Forecast } from "../../components/weather-screen/forecast/Forecast";

export function WeatherScreen() {

    return (
        <div className="weather-screen">
            <ActionBar/>
            <div className="weather-forecast-wrapper">
                <CurrentWeather/>
                <Forecast/>
            </div>
            
        </div>
    )
}
