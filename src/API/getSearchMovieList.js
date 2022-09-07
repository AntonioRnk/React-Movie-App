import axios from "axios";
import { apiKey } from "./config";

export const getSearchMovieList = async (idGenre,idRegion, page, isLoading)=>{
    isLoading(true);
    const getMovie = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`,
    {params: {
        language: 'uk', 
        sort_by: 'popularity.desc',
        with_genres: idGenre,
        watch_region : idRegion,
        page : page,
    }})
    const movieList = await getMovie.data;
    isLoading(false);
    return movieList;
}