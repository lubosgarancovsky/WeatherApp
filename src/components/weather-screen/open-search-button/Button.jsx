import locationIcon from '../../../assets/icons/location_blue.svg'
import { useContext } from "react";
import { ScreenToggleContext } from "../../../context/context";


// Tlacidlo s nazovm lokacie, ktore otvara search screen
export function Button({city}) {

    const {isOpen, setOpen} = useContext(ScreenToggleContext)

    const handleClick = () => {
        setOpen(!isOpen)
    }

    return ( 
        <button className="to-search-screen-btn" onClick={handleClick}>
            <p>{city}</p>
            <img src={locationIcon} alt="location-icon" />
        </button>
     );
}