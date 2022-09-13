import axios from "axios";
import { apiKey } from "./config";

export const getTrailerKey = async(id,isLoading)=>{
    isLoading(true);
    const movieKey = await axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${apiKey}`,
    {params: {
        language: 'uk',
    }})
    
    if(movieKey.data.results.length){
        isLoading(false);
        return movieKey.data.results;
    }
    else{
        const movieKeyUS = await axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${apiKey}`,
        {params: {
            language: 'us',
        }})
        isLoading(false);
        return movieKeyUS.data.results;
    }
}
