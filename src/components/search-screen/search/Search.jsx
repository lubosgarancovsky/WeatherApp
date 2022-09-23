import { useState } from 'react';

import { SearchResultList } from '../searchResultList/SearchResultList';
import locationIcon from '../../../assets/icons/location.svg'

export function Search() {

    const [searchTerm, setSearchTerm] = useState('')

    const handleChange = (e) => {
        setSearchTerm(e.target.value)
    }

    return ( 
        <section className='search-wrapper'>
            <div className='searchbar'>
                <input type="text" placeholder="Search city ..." onChange={handleChange}></input>
                <img className='searchbar-icon' src={locationIcon} alt="location-icon" />
            </div>
            <SearchResultList searchTerm={searchTerm}/>
        </section>
        

     );
}
