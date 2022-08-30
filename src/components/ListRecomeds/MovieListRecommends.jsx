import React, { useEffect, useState } from 'react'
import 'swiper/css';
import 'swiper/css/autoplay';
import { getRecomendationMovie } from '../../API/getRecomendationMovie';
import Slider from '../UI/Slider/Slider';
import styles from './MovieListRecommends.module.scss'

const MovieListRecommends = ({idMovie}) => {

    const [movieList, setMovieList] = useState([]);

    useEffect(()=>{
    getRecomendationMovie(idMovie).then(movies=>{
      setMovieList(movies);
    });
    }, [idMovie])
   
  return (
    !!movieList.length && 
    <div className={styles.recomdation}>
      <h3>Рекомендації до перегляду:</h3>
          <Slider listItem ={movieList}/>      
    </div>
  )

}
export default MovieListRecommends