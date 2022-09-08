import axios from "axios";
import { apiKey } from "./config";

export const getAllRegion = async()=>{
    const regionDetails = await axios.get(`https://api.themoviedb.org/3/configuration/languages?api_key=${apiKey}`,
    {params: {
        language: 'uk', 
    }})
    const regions = await regionDetails.data;

    return regions;
}