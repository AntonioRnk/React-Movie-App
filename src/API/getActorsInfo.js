import axios from "axios";
import { apiKey } from "./config";

export const getActorsinMovie = async(idMovie)=>{
    const actorsMovie= await axios.get(`https://api.themoviedb.org/3/movie/${idMovie}/credits?api_key=${apiKey}`)
    return actorsMovie.data.cast;
}

export const getActorDetails = async(idActor,isLoading)=>{
    isLoading(true);
    const actorsDetails = await axios.get(`https://api.themoviedb.org/3/person/${idActor}?api_key=${apiKey}`,
    {params: {
        language: 'uk', 
    }})
    isLoading(false);
    return actorsDetails.data;
}

export const getActorPlay = async(idActor)=>{
    const actorsPlay = await axios.get(`https://api.themoviedb.org/3/person/${idActor}/movie_credits?api_key=${apiKey}`,
    {params: {
        language: 'uk', 
    }})
    return actorsPlay.data.cast;
}

