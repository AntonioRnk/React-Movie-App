import { CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { getPlayerMovieUrl } from '../../API/getPlayerMovieUrl';
import styles from './MoviePlayer.module.scss';

const MoviePlayer = ({idImdb}) => {

const [movieItem, setMovieItem] = useState([]);
const [loading, SetLoading] = useState(true);

useEffect (()=>{
    getPlayerMovieUrl(idImdb,SetLoading).then(rezult=>{
        setMovieItem(rezult); 
    })
  },[idImdb])

  return (
    !loading ? 
    <div className={styles.moviePlayer}>
        {movieItem ? <iframe src={movieItem.iframe_src} width="100%" height="500" frameBorder="0" title={'kino'} allowFullScreen loading="lazy"></iframe>
                   : <div className={styles.notPlayer}> Не знайдено 😞</div>
        }
    </div>
    : <div className={styles.moviePlayer}>
      <CircularProgress size ={30} className={styles.progress}/>
    </div>
  )
}

export default MoviePlayer