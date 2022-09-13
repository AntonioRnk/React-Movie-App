import axios from "axios";
import { apiKey } from "./config";

export const getRecomendationMovie = async (id)=>{
    const getMovie = await axios.get(`https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${apiKey}`,
    {params: {
        language: 'uk', 
        page: 1,
    }})
    return getMovie.data.results;
}

export const getCommentsMovie = async (id,isLoading)=>{
    isLoading(true);
    const getMovie = await axios.get(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${apiKey}`,
    {params: {
        language: 'us',
        page: 1, 
    }})
    isLoading(false);
    return getMovie.data.results;
}
