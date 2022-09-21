import { CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { getPlayerMovieUrl, testPlayerMovieUrlR} from '../../API/getPlayerMovieUrl';
import SwitchLanguage from '../UI/SwitchLanguage/SwitchLanguage';
import styles from './MoviePlayer.module.scss';

const MoviePlayer = ({idImdb}) => {

const [movieItem, setMovieItem] = useState('');
const [loading, SetLoading] = useState(true);
const [checked, setChecked] = useState(true);

useEffect (()=>{
  if(checked){
    getPlayerMovieUrl(idImdb,SetLoading).then(rezult=>{
        if (rezult){
          setMovieItem(rezult.iframe_src); 
        }
        else {setMovieItem(rezult)} 
    })
  }
  else {
    testPlayerMovieUrlR(idImdb,SetLoading).then(rezult=>{
       if(rezult){
        setMovieItem(`https://94.annacdn.cc/qefiHFXgjMpF?imdb_id=${idImdb}`);
       }
       else {setMovieItem(rezult)}
    }).catch(()=>{
       setMovieItem('');
    })
  }
  },[idImdb,checked])

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    !loading ? 
    <div className={styles.moviePlayer}>
      <div className={styles.language}>
        <p>Оберіть мову:</p>
        <SwitchLanguage checked={checked} handleChange={handleChange}/>
      </div>
        {movieItem ? <iframe src={movieItem} width="100%" height="500" frameBorder="0" title={'kino'} allowFullScreen loading="lazy"></iframe>
                   : <div className={styles.notPlayer}> Не знайдено 😞</div>
        }
    </div>
    : <div className={styles.moviePlayer}>
      <CircularProgress size ={50} className={styles.progress}/>
    </div>
  )
}

export default MoviePlayer