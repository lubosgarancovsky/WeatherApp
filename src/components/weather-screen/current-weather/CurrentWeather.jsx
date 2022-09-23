import { useFetchCurrent } from '../../../hooks/useFetchCurrent'
import { LocationContext } from '../../../context/context';
import { motion } from 'framer-motion';

import { useContext } from 'react';
import { formatNumber } from '../../../Utils/format'
import { timestampToTime, getDayTime } from '../../../Utils/time';

import { LoadingIndicator } from '../../root/loadingIndicator/LoadingIndicator'
import { WeatherProperty } from '../weather-property-card/WeatherProperty';
import { chooseIcon } from '../../../Utils/chooseIcon';

// ICONS
import humidity from '../../../assets/icons/humidity.svg'
import pressure from '../../../assets/icons/pressure.svg'
import wind from '../../../assets/icons/wind.svg'
import sunrise from '../../../assets/icons/sunrise.svg'
import sunset from '../../../assets/icons/sunset.svg'
import daytime from '../../../assets/icons/daytime.svg'

import vectorUp from '../../../assets/icons/vectorUp.svg'
import vectorDown from '../../../assets/icons/vectorDown.svg'

// Mriezka zobrazujuca pocasie
export function CurrentWeather() {

    const { location } = useContext(LocationContext)
    const { data, loading, error } = useFetchCurrent(location)

    if (error) {
        return (
            <div className="current-weather">
                <h2>There has been an error when fetching data</h2>
            </div>
        )
    }

    if (loading) {
        return (
            <div className="current-weather">
                <LoadingIndicator />
            </div>
        )
    }

    if (data === null || data === undefined) {
        return (
            <div className="current-weather">
                <h2>Search for any valid location</h2>
            </div>
        )
    }

    return (
        <motion.div className="current-weather"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{
                duration: 0.4,
                delay: 0.2,
                ease: 'easeInOut'
            }}
        >
            <div className="row main-row">
                <div className="column">
                    <div className="weather-wrapper">
                        <img src={chooseIcon(data.weather[0].main)} alt='weather' />
                        <h3>{data.weather[0].main}</h3>
                    </div>
                </div>

                <div className="column">
                    <div className="temperature-wrapper">
                        <h1>{Math.round(data.main.temp)}</h1>
                    </div>
                </div>

                <div className="column">
                    <div className="lowest-highest-wrapper">
                        <div className="highest">
                            <h4>{Math.round(data.main.temp_max)}°C</h4>
                            <img src={vectorUp} alt="vector-up" />
                        </div>

                        <div className="lowest">
                            <h4>{Math.round(data.main.temp_min)}°C</h4>
                            <img src={vectorDown} alt="vector-down" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="row attributes-row">
                <div className="column">
                    <WeatherProperty icon={humidity} value={data.main.humidity + '%'} title={"Humidity"} />
                </div>
                <div className="column">
                    <WeatherProperty icon={pressure} value={formatNumber(data.main.pressure, ',') + 'mBar'} title={"Pressure"} />
                </div>
                <div className="column">
                    <WeatherProperty icon={wind} value={data.wind.speed + 'km/h'} title={"Wind"} />
                </div>
            </div>

            <div className="row attributes-row">
                <div className="column">
                    <WeatherProperty icon={sunrise} value={timestampToTime(data.sys.sunrise)} title={"Sunrise"} />
                </div>
                <div className="column">
                    <WeatherProperty icon={sunset} value={timestampToTime(data.sys.sunset)} title={"Sunset"} />
                </div>  
                <div className="column">
                    <WeatherProperty icon={daytime} value={getDayTime(data.sys.sunrise, data.sys.sunset)} title={"Daytime"} />
                </div>
            </div>
        </motion.div>
    );
}