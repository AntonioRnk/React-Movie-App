import { SEARCH_GENRE, SEARCH_IS_FOUND, SEARCH_QUERY } from "./types";

const initState = {
    value : '',
    list : [],
    found : true
}

export const searchReducer = (state = initState, action) => {
    switch(action.type){
        case SEARCH_GENRE:
            return {...state, value: action.value}
        case SEARCH_QUERY:
            return {...state, list: action.list}
        case SEARCH_IS_FOUND:
            return {...state, found: action.found}
        default :
            return state;
    }
}