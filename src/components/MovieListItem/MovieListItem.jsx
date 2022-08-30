import React from 'react';
import { useNavigate } from 'react-router-dom';
import { urlPosterImg } from '../../API/config';
import styles from './MovieListItem.module.scss'

const MovieListItem = ({path,title,id}) => {
const navigate = useNavigate();

console.log(styles.play);

  return (
    path &&
    <div className={styles.movieItem} onClick={()=>{navigate(`/movies/${id}`)}}>
      <img className={styles.poster}  src={urlPosterImg+path} alt={title}/>
      <div className={styles.play} >
        <img src="https://freesvg.org/img/playbuttonclear.png" alt="play" />
      </div>
    </div>
  )
}

export default MovieListItem