import { SEARCH_DATE, SEARCH_GENRE, SEARCH_IS_FOUND, SEARCH_QUERY, SEARCH_REGION, CURRENT_PAGE, SEARCH_ACTOR } from "./types";

export const searchFromGenre = (id,name) =>{
    return {
        type: SEARCH_GENRE,
        infoGenre: {id,name}
    }
}

export const searchFromRegion = (id,name) =>{
    return {
        type: SEARCH_REGION,
        infoRegion: {iso_639_1 : id, english_name : name}
    }
}

export const searchFromActor = (id,name) =>{
    return {
        type: SEARCH_ACTOR,
        infoActor: {id, name}
    }
}

export const searchListMovies = (list) =>{
    return {
        type: SEARCH_QUERY,
        list,
    }
}

export const searchIsFound = (found) =>{
    return {
        type: SEARCH_IS_FOUND,
        found,
    }
}


export const searchFromDate = (range) =>{
    return {
        type: SEARCH_DATE,
        range,
    }
}

export const searchPage = (page) =>{
    return {
        
        type: CURRENT_PAGE,
        page,
    }
}

