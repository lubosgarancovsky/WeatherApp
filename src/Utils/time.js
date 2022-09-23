
/**
 * Prepocita timestamp na cas v 12 hodinovom formate
 * @param {number} timestamp 
 * @returns cas v 12 hodinovom formate HH:MM AM/PM
 */
export const timestampToTime = (timestamp) => {
    let date = new Date(timestamp * 1000)
    let hours = date.getHours()
    let minutes = date.getMinutes()
    let ampm = hours >= 12 ? 'PM' : 'AM'
    hours = hours % 12

    minutes = minutes < 10 ? '0' + minutes : minutes

    //ak je hodina = 0, zmeni sa na 12, podla 12 hodinoveho casoveho formatu
    hours = hours ? hours : 12

    let formattedTime = `${hours}:${minutes} ${ampm}`
    return formattedTime
}



/**
 * Ziska cas a datum
 * @returns Datum a cas v tvare  `Wednesday, 21 Sep 2022 | 4:30PM`
 */
export const currentDate = () => {
    let days = ["Monday", "Thuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    let current = new Date()

    let dayStr = days[current.getDay() - 1]
    let day = current.getDate()
    let month = months[current.getMonth()]
    let year = current.getFullYear()

    let time = timestampToTime(Date.now() / 1000)

    let formattedDate = `${dayStr}, ${day} ${month} ${year} | ${time}`

    return formattedDate
}


/**
 * Vypocita rozdiel medzi casom zapadu slnka a casom vychodu slnka
 * @param {number} sunrise timestamp casu svitania
 * @param {number} sunset timestamp casu zapadu slnka
 * @returns rozdiel medzi zadanymi casmi vo formate `13h 25m`
 */
export const getDayTime = (sunrise, sunset) => {
    let sunriseDate = new Date(sunrise * 1000)
    let sunsetDate = new Date(sunset * 1000)
    let diffMs = sunsetDate - sunriseDate
    let diffHours = Math.floor((diffMs % 86400000) / 3600000)
    let diffMinutes = Math.round(((diffMs % 86400000) % 3600000) / 60000);

    return `${diffHours}h ${diffMinutes}m`

}


/**
 * Premeni timestamp na datum
 * @param {number} timestamp 
 * @returns Datum vo formate `Wed, 23`
 */
export const timestampToDate = (timestamp) => {
    let daysInWeek = ["Sun", 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', "Sat"]
    let date = new Date(timestamp * 1000)
    let day = date.getDay()
    let dayInMonth = date.getDate()
  
    if (dayInMonth < 10) {
      dayInMonth = '0' + dayInMonth
    }
  
    return `${daysInWeek[day]}, ${dayInMonth}`
  }