
import vectorUp from '../../../assets/icons/vectorUp.svg'
import vectorDown from '../../../assets/icons/vectorDown.svg'

export function ForecastCard({icon, date, lowestTemp, highestTemp}) {
    return ( 
        <div className="day-card">
            <div className="forecast-icon-wrapper">
                <img src={icon} alt="icon" />
            </div>

            <div className="forecast-date-wrapper">
                <h3>{date}</h3>
            </div>

            <div className="forecast-temperature-wrapper">
                <div className="forecast-highest">
                    <h5>{highestTemp}°C <img src={vectorUp} alt="vector-up" /></h5>
                    
                </div>

                <div className="forecast-lowest">
                    <h5>{lowestTemp}°C  <img src={vectorDown} alt="vector-up" /></h5>
                </div>
            </div>
        </div>
     );
}