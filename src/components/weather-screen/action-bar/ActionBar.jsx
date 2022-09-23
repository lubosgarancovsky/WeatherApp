import {useState, useEffect, useContext} from 'react'
import { LocationContext } from '../../../context/context'
import { currentDate } from '../../../Utils/time'
import { Button } from '../open-search-button/Button'


// Zobrazuje tlacidlo s nazvom mesta a datum na obrazovke s pocasim
export function ActionBar() {

    const [date, setDate] = useState(currentDate())
    const { location } = useContext(LocationContext)


    // kazdych 30 sekund znova nacita datum a cas
    useEffect(() => {
        let interval = setInterval(() => setDate(currentDate()), 30000);

        return (()=>{
            clearInterval(interval)
        })
      }, []);


    return ( 
        <div className="top-bar">
            <p className="datetime">{date}</p>
            <Button city={location === undefined ? 'Choose place' : `${location.name}, Slovakia`} />
        </div>
     );
}
