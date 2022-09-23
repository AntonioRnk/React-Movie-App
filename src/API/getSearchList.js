import axios from "axios";
import { apiKey } from "./config";

export const getSearchMovieList = async (search)=>{
    const getSearchMovie = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}`,
    {params: {
        query : search,
        language: 'uk', 
        sort_by: 'popularity.desc',
        include_adult: false,
        page: 1,
    }})
    return getSearchMovie.data.results;
}