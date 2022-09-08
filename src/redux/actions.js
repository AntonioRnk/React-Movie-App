import { SEARCH_DATE, SEARCH_GENRE, SEARCH_IS_FOUND, SEARCH_QUERY, SEARCH_REGION, CURRENT_PAGE } from "./types";

export const searchFromGenre = (genryId,genryName) =>{
    return {
        type: SEARCH_GENRE,
        genryId,
        genryName,
    }
}

export const searchFromRegion = (regionId,regionName) =>{
    return {
        type: SEARCH_REGION,
        regionId,
        regionName,
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

