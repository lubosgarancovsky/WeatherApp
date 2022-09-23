export function WeatherProperty({icon, value, title}) {
    return ( 
        <div className="weather-attribute">
            <div className="attribute-icon-wrapper">
                <img src={icon} alt="icon" />
            </div>

            <div className="attribute-value-wrapper">
                <h3>{value}</h3>
            </div>

            <div className="attribute-title-wrapper">
                <h5>{title}</h5>
            </div>
        </div>
     );
}
