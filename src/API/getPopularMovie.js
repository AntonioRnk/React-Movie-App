import axios from "axios";
import { apiKey } from "./config";

export const getPopularMovie = async (isLoading)=>{
    isLoading(true);
    const getMovie = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`,
    {params: {
        language: 'uk', 
        page: 1,
    }})
    isLoading(false);
    return getMovie.data.results;
}

export const getPopularPeople = async ()=>{
    const getMovie = await axios.get(`https://api.themoviedb.org/3/person/popular?api_key=${apiKey}`,
    {params: {
        language: 'uk', 
        page: 1,
    }})
    return getMovie.data.results;
}

