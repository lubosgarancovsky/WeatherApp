import { useEffect, useState } from 'react'


/**
 * Custom hook ktory ziska data o vsetkych siestich mestach, aby sa na search screen mohla zobrazit 
 * teplota v pravom rohu.
 * @param {string[]} array Pole s nazvami miesto, ktore sa maju ziskat z API
 * @returns data, loading
 */
export function useFetchCities(array) {

    const [loading, setLoading] = useState(true)
    const [data, setData] = useState(null)
    
    const getAllData = async () => {
            let data = []
            for (let i = 0; i < array.length; i++) {
                const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${array[i]}&units=metric&appid=9bad5acbe78e5cb42955c85fdf9cc36b`)
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