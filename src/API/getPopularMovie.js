import axios from "axios";
import { apiKey } from "./config";


export const getPopularMovie = async ()=>{
    const getMovie = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`,
    {params: {
        language: 'uk', 
        sort_by: 'popularity.desc',
        include_adult: false,
        include_video:false,
        page: 1,
        with_watch_monetization_types: 'free',
    }})
    const movieList = await getMovie.data.results;
    return movieList;
}

