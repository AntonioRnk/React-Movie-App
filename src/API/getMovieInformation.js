import axios from "axios";
import { apiKey } from "./config";

export const getMovieInformation = async(id, isLoading)=>{
    isLoading(true);
    const getMovie = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`,
    {params: {
        language: 'uk',
    }})
    isLoading(false);
    return getMovie.data;
}
