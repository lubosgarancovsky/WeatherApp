import { useContext } from "react";
import { ScreenToggleContext, LocationContext  } from "../../../context/context"

export function SearchResult({city, temperature, lon, lat}) {

    const {setOpen} = useContext(ScreenToggleContext)
    const {setLocation} = useContext(LocationContext)


    // Po kliknuti na mesto sa do kontextu ulozi objekt s polohou a nazvom
    const handleClick = () => {
        setLocation({
            name: city,
            lon: lon,
            lat: lat,
        })
        setOpen(false)

    }

    return ( 
        <button className="search-result" onClick={handleClick}>
            <p className="search-result-city">{city}</p>
            <p className="search-result-temperature">{temperature}°C</p>
        </button>
     );
}