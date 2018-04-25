/**
 * 
 * @param {string} event 
 * @param {any} data 
 */
export const createEvent = (event, data) => new CustomEvent(event, { detail: data })