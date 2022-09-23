import { useContext } from "react";
import { LocationContext } from "../../../context/context";
import { chooseIcon } from "../../../Utils/chooseIcon";
import { timestampToDate } from "../../../Utils/time";

import { useFetchForecast } from '../../../hooks/useFetchForecast'

import { ForecastCard } from "../forecast-card/ForecastCard";
import { motion } from "framer-motion";


// Predpoved pocasia
export function Forecast() {

    const { location } = useContext(LocationContext)
    const { data, loading, error } = useFetchForecast(location)

    if (loading) {
        return (
            <div className="forecast">
                <h2>Loading forecast</h2>
            </div>
        )
    }

    if (error) {
        return (
            <div className="forecast">
                <h2>There has been an error when getting forecast data</h2>
            </div>
        )
    }

    if (data === null || data === undefined) {
        return(
            <div className="forecast">
                <h2>Forecast data not availible</h2>
            </div>
        )
    }

    return (
        <motion.div className="forecast"
            initial={{y: '100%', opacity: 0}}
            animate={{y: 0,  opacity: 1}}
            transition={{
                duration: 0.4,
                delay: 0.4,
                ease: 'easeInOut'
            }}
        >

            <ForecastCard icon={chooseIcon(data.daily[1].weather[0].main)} date={timestampToDate(data.daily[1].dt)} lowestTemp={Math.round(data.daily[1].temp.min)} highestTemp={Math.round(data.daily[1].temp.max)} />
            <ForecastCard icon={chooseIcon(data.daily[2].weather[0].main)} date={timestampToDate(data.daily[2].dt)} lowestTemp={Math.round(data.daily[2].temp.min)} highestTemp={Math.round(data.daily[2].temp.max)} />
            <ForecastCard icon={chooseIcon(data.daily[3].weather[0].main)} date={timestampToDate(data.daily[3].dt)} lowestTemp={Math.round(data.daily[3].temp.min)} highestTemp={Math.round(data.daily[3].temp.max)} />
            
        </motion.div>
    )
}


/*
if (loading) {
        return (
            <div className="forecast">
                <h2>Loading forecast</h2>
            </div>
        )
    }

    if (error) {
        return (
            <div className="forecast">
                <h2>{error}</h2>
            </div>
        )
    }

    if (data === null || data === undefined) {
        <div className="forecast">
            <h2>Forecast data not availible</h2>
        </div>
    }

    return (
        <div className="forecast">
            <ForecastCard icon={chooseIcon(data.daily[1].weather[0].main)} date={timestampToDate(data.daily[1].dt)} lowestTemp={Math.round(data.daily[1].temp.min)} highestTemp={Math.round(data.daily[1].temp.max)} />
            <ForecastCard icon={chooseIcon(data.daily[2].weather[0].main)} date={timestampToDate(data.daily[2].dt)} lowestTemp={Math.round(data.daily[2].temp.min)} highestTemp={Math.round(data.daily[2].temp.max)} />
            <ForecastCard icon={chooseIcon(data.daily[3].weather[0].main)} date={timestampToDate(data.daily[3].dt)} lowestTemp={Math.round(data.daily[3].temp.min)} highestTemp={Math.round(data.daily[3].temp.max)} />
        </div>
    );
*/

/*
            <ForecastCard icon={chooseIcon('Rain')} date={'Fri 23'} lowestTemp={10} highestTemp={20} />
            <ForecastCard icon={chooseIcon('Hazze')} date={'Fri 23'} lowestTemp={10} highestTemp={20} />
            <ForecastCard icon={chooseIcon('Clear')} date={'Fri 23'} lowestTemp={10} highestTemp={20} />
*/