import { useEffect, useState } from "react";
import { SearchResult } from "../searchResult/SearchResult";

import { useFetchCities } from "../../../hooks/useFetchCities";


const cities = ['Bratislava', 'Košice', 'Sobrance', 'Koromľa', 'Michalovce', 'Humenné']

export function SearchResultList({ searchTerm }) {

    const [fetchedData, setData] = useState([])

    // Na zaciatku ziskavam data o mestach, aby som mohol zobrazit aktualnu teplotu pod search barom
    const { data, loading } = useFetchCities(cities)


    // filtrovanie miest na zaklade imputu zo search baru
    useEffect(() => {
        let filterString = searchTerm.toLowerCase()
        if (data != null || data != undefined) {
            let array = data.filter(item => item.name.toLowerCase().indexOf(filterString) != -1)
            setData(array)
        }

    }, [data, searchTerm])


    // Vypise sa `Getting locations` ak sa este nestihli nacitat vsetky mesta
    if (loading) {
        return (
            <div className="search-result-list">
                <h3>Getting locations...</h3>
            </div>
        )
    }


    return (
        <div className="search-result-list">
            {
                fetchedData.map((city, index) => (
                    <SearchResult key={index} city={city.name} temperature={Math.round(city.main.temp)} lon={city.coord.lon} lat={city.coord.lat} />
                ))
            }
        </div>
    );
}