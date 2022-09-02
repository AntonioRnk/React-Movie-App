import { SEARCH_GENRE, SEARCH_IS_FOUND, SEARCH_QUERY } from "./types";

export const searchFromGenre = (value) =>{
    return {
        type: SEARCH_GENRE,
        value,
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