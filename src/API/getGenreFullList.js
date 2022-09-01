import axios from "axios";
import { apiKey } from "./config";

export const getGenreFullList = async ()=>{
    const getMovie = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`,
    {params: {
        language: 'uk', 
    }})
    const movieList = await getMovie.data.genres;
    return movieList;
}