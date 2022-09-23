import Sunny from '../assets/icons/sunny.svg'
import Clouds from '../assets/icons/cloudy.svg'
import Haze from '../assets/icons/hazy.svg'
import Clear from '../assets/icons/sunny2.svg'
import Snow from '../assets/icons/snow.svg'
import Rain from '../assets/icons/rain.svg'
import Drizzle from '../assets/icons/drizzle.svg'

/**
 * Na zaklade ziskaneho pocasia vyberie ikonu ('Rain' => ikona dazda).
 * @param {string} weather 
 * @returns odkaz na obrazok
 */
export const chooseIcon = (weather) => {
    switch (weather) {
        case 'Clouds':
            return Clouds
        case 'Clear':
            return Clear
        case 'Haze':
            return Haze
        case 'Clear':
            return Clear
        case 'Drizzle':
            return Drizzle
        case 'Snow':
            return Snow
        case 'Rain':
            return Rain
        default:
            return Sunny
    }
}