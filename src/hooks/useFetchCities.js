import { useEffect, useState } from 'react'


/**
 * Custom hook ktory ziska data o vsetkych siestich mestach, aby sa na search screen mohla zobrazit 
 * teplota v pravom rohu.
 * @param {string[]} array Pole s nazvami miest, ktore sa maju ziskat z API
 * @returns data, loading
 */
export function useFetchCities(array) {

    const apikey = process.env.REACT_APP_API_KEY;

    const [loading, setLoading] = useState(true)
    const [data, setData] = useState(null)
    
    const getAllData = async () => {
            let data = []
            for (let i = 0; i < array.length; i++) {
                const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${array[i]}&units=metric&appid=${apikey}`)
                const json = await response.json()
    
                data.push(json)
            }
            setData(data)
            setLoading(false)
    }

    useEffect(() => {
        getAllData()
    }, [array])


    return { data, loading }
}