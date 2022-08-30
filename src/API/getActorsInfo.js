import axios from "axios";
import { apiKey } from "./config";

export const getActorsinMovie = async(idMovie)=>{
    const actorsMovie= await axios.get(`https://api.themoviedb.org/3/movie/${idMovie}/credits?api_key=${apiKey}`)
    const actorsInfo = await actorsMovie.data.cast;
    return actorsInfo;
}

export const getActorDetails = async(idActor)=>{
    const actorsDetails = await axios.get(`https://api.themoviedb.org/3/person/${idActor}?api_key=${apiKey}`,
    {params: {
        language: 'uk', 
    }})
    const actorInfo = await actorsDetails.data;
    return actorInfo;
}


export const getActorPlay = async(idActor)=>{
    const actorsPlay = await axios.get(`https://api.themoviedb.org/3/person/${idActor}/movie_credits?api_key=${apiKey}`,
    {params: {
        language: 'uk', 
    }})
    const actorInfo = await actorsPlay.data.cast;
    return actorInfo;
}

