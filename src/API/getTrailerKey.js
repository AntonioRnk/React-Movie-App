import axios from "axios";
import { apiKey } from "./config";

export const getTrailerKey = async(id,isLoading)=>{
    isLoading(true);
    const movieKey = await axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${apiKey}`,
    {params: {
        language: 'uk',
    }})
    const key  = await movieKey.data.results;
    isLoading(false);
    return key;
}
