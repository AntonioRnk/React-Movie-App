import axios from "axios";
import { apiKey } from "./config";

export const getSearchMovieList = async (idGenre, idRegion, dateRange, page, isLoading)=>{
    isLoading(true);
    const getMovie = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`,
    {params: {
        language: 'uk', 
        sort_by: 'popularity.desc',
        with_genres: idGenre,
        with_original_language : idRegion,
        'primary_release_date.gte' : `${dateRange[0]}-01-01`,
        'primary_release_date.lte' : `${dateRange[1]}-12-31`,
        page : page,
    }})
    const movieList = await getMovie.data;
    isLoading(false);
    return movieList;
}