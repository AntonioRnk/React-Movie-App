import { SEARCH_GENRE, SEARCH_IS_FOUND, SEARCH_QUERY, SEARCH_REGION } from "./types";

const initState = {
    genryId : '',
    genryName : '',
    regionId : '',
    regionName : '',
    list : [],
    found : true
}

export const searchReducer = (state = initState, action) => {
    switch(action.type){
        case SEARCH_GENRE:
            return {...state, genryId: action.genryId, genryName: action.genryName}
        case SEARCH_REGION:
            return {...state, regionId: action.regionId, regionName: action.regionName}       
        case SEARCH_QUERY:
            return {...state, list: action.list}
        case SEARCH_IS_FOUND:
            return {...state, found: action.found}
        default :
            return state;
    }
}