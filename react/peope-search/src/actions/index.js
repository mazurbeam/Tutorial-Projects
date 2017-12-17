/*
* action types
*/

export const SET_FILTER = 'SET_FILTER'

const filter = ''

export function setFilter(text) {
    return {type: SET_FILTER, text}
}