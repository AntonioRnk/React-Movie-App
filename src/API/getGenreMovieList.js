import axios from "axios";
import { apiKey } from "./config";

export const getGenreMovieList = async (idGenre)=>{
    const getMovie = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`,
    {params: {
        language: 'uk', 
        sort_by: 'popularity.desc',
        with_genres: idGenre,
    }})
    const movieList = await getMovie.data.results;
    return movieList;
}