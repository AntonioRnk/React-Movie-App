import axios from "axios";
import { apiKey } from "./config";


export const getRecomendationMovie = async (id)=>{
    const getMovie = await axios.get(`https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${apiKey}`,
    {params: {
        language: 'uk', 
        page: 1,
    }})
    const movieList = await getMovie.data.results;
    return movieList;
}