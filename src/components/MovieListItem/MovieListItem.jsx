import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { useNavigate } from 'react-router-dom';
import { urlPosterImg } from '../../API/config';
import styles from './MovieListItem.module.scss'

const MovieListItem = ({path,title,id}) => {
const navigate = useNavigate();

  return (
    <div className={styles.movieItem} onClick={()=>{navigate(`/movies/${id}`)}}>
      { path ? 
         <LazyLoadImage
         className={styles.poster} 
         alt={title}
         effect="blur"
         height={337}
         src={urlPosterImg+path}
         width={227} />
        : <div className={styles.notFound}>
             <p>{title}</p>
             <img className={styles.poster} src="https://i.ibb.co/3BdG0wD/notfound-image.jpg" alt="notFound" />
          </div>
      }
      <div className={styles.play} >
        <img src="https://freesvg.org/img/playbuttonclear.png" alt="play" />
      </div>
    </div> 
  )
}

export default MovieListItem