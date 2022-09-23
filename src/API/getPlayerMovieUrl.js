import axios from "axios";
import {playApiKey} from "./config";

export const getPlayerMovieUrl= async(idImdb, isLoading)=>{
    isLoading(true);
    const moviePlayer = await axios.get(`https://5124.svetacdn.in/api/short`,
    {params: {
        api_token : playApiKey,
        imdb_id: idImdb,
    }})
    const [player]  = await moviePlayer.data.data;
    isLoading(false);
    return player;
}

export const testPlayerMovieUrlR= async(idImdb,isLoading)=>{
    try {
      isLoading(true);
      const moviePlayer = await axios.get(`https://94.annacdn.cc/qefiHFXgjMpF?imdb_id=${idImdb}`);
      return moviePlayer;
    } catch (err) {
        console.log(err);
    } finally {
        isLoading(false);
    }
}