
/**
 * Formatuje cislo po 3 cifrach pomocou separatora
 * @param {number} value 
 * @param {string} separator
 * @returns cislo rozdelene po tisickach separatorom  -> `1,225,486`
 */
export const formatNumber = (value, separator) => {

    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, `${separator}`);
}