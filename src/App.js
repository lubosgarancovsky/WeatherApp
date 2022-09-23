import { ScreenToggleContext, LocationContext } from './context/context';
import './App.scss';

import backgroundImage from './assets/background/background.svg'
import { SearchScreen } from './containers/searchScreen/SearchScreen';
import { WeatherScreen } from './containers/weatherScreen/WeatherScreen';
import { useState } from 'react';


function App() {
  const [isOpen, setOpen] = useState(true)
  const [location, setLocation] = useState()

  return (
    <LocationContext.Provider value={{location, setLocation}}>
      <ScreenToggleContext.Provider value={{ isOpen, setOpen }}>
        <div className="App">

          <div className='background'>
            <img src={backgroundImage} alt='background city panorama' />
          </div>
          
            <WeatherScreen />
            <SearchScreen />
        </div>
      </ScreenToggleContext.Provider>
    </LocationContext.Provider>

  );
}

export default App;
