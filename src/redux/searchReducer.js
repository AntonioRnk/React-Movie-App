import { CURRENT_PAGE, SEARCH_ACTOR, SEARCH_DATE, SEARCH_GENRE, SEARCH_IS_FOUND, SEARCH_QUERY, SEARCH_REGION } from "./types";

const initState = {
    infoGenre: [{id:'',name:''}],
    infoRegion: [{iso_639_1:'',english_name:''}],
    page : 1,
    range :[1960, 2023],
    list : [],
    infoActor: [{id:'',name:''}],
    found : true
}

export const searchReducer = (state = initState, action) => {
    switch(action.type){
        case SEARCH_GENRE:
            return {...state, infoGenre: [action.infoGenre]} 
        case SEARCH_REGION:
            return {...state, infoRegion: [action.infoRegion]}
        case SEARCH_ACTOR:
            return {...state, infoActor: [action.infoActor]}        
        case SEARCH_QUERY:
            return {...state, list: action.list}
        case SEARCH_DATE:
            return {...state, range: action.range}            
        case SEARCH_IS_FOUND:
            return {...state, found: action.found}
        case CURRENT_PAGE:
            return {...state, page: action.page}            
        default :
            return state;
    }
}