import React, { useEffect, useState } from 'react'
import 'swiper/css';
import 'swiper/css/autoplay';
import { getRecomendationMovie } from '../API/getRecomendationMovie';
import Slider from './UI/Slider/Slider';

const MovieListRecommends = ({idMovie}) => {

    const [movieList, setMovieList] = useState([]);

    useEffect(()=>{
    getRecomendationMovie(idMovie).then(movies=>{
      setMovieList(movies);
    });
    }, [idMovie])
   
  return (
    !!movieList.length && 
    <div className="movie-list-recomdation">
      <h3>Рекомендації до перегляду:</h3>
          <Slider listItem ={movieList}/>      
    </div>
  )

}
export default MovieListRecommends