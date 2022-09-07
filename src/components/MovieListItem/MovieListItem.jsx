import React from 'react';
import ImageLoader from 'react-imageloader';
import { useNavigate } from 'react-router-dom';
import { urlPosterImg } from '../../API/config';
import styles from './MovieListItem.module.scss'

const MovieListItem = ({path,title,id}) => {
const navigate = useNavigate();

function preloader() {
  return <img src="https://i.ibb.co/B4SfH9P/111111.gif" alt='loader'/>;
}


  return (
    <div className={styles.movieItem} onClick={()=>{navigate(`/movies/${id}`)}}>
      { path ? 
         <ImageLoader
          className={styles.poster} 
          src={urlPosterImg+path}
          alt = {title} 
          wrapper={React.createFactory('div')}
          preloader={preloader}>
        </ImageLoader>
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