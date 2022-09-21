import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { useNavigate } from 'react-router-dom';
import { urlPosterImg } from '../../API/config';
import styles from './MovieListItem.module.scss'

const MovieListItem = ({path,title,id,height,width}) => {
const navigate = useNavigate();

  return (
    <div className={styles.movieItem} onClick={()=>{navigate(`/movies/${id}`)}}>
      { path ? 
         <LazyLoadImage
         className={styles.poster} 
         alt={title}
         effect="blur"
         height={height}
         src={urlPosterImg+path}
         width={width} />
        : <LazyLoadImage
            className={styles.poster} 
            alt={'notFound'}
            effect="blur"
            height={height}
            src={'https://i.ibb.co/3BdG0wD/notfound-image.jpg'}
            width={width} />
          }
      <div className={styles.play} >
        <img src="https://freesvg.org/img/playbuttonclear.png" alt="play" />
      </div>
    </div> 
  )
}

export default MovieListItem