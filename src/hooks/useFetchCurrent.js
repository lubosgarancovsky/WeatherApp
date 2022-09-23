import { useEffect, useState } from 'react'


/**
 * Ziskava pocasie v danom momente
 * @param {{name: string, lon: number, lat:number}} location Objekt s nazom a polohou hladaneho mesta
 * @returns data, loading, error
 */
export function useFetchCurrent(location) {

    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState(null)
    

    useEffect(() => {
        if (location !== undefined) {
            setLoading(true)
            fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&units=metric&appid=9bad5acbe78e5cb42955c85fdf9cc36b`)
                .then((response) => {
                    if (response.ok) {
                        setError(null)
                        return response.json()
                    }
                })
                .then((data) => setData(data))
                .catch((error) => {
                    setError(error)
                })
                .finally(() => {
                    setLoading(false)
                })
        }

    }, [location])


    return { data, loading, error }
}