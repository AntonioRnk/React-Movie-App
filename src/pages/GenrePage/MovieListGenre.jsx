import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getGenreMovieList } from '../../API/getGenreMovieList';
import MovieListItem from '../../components/MovieListItem/MovieListItem';
import styles from './MovieListGenre.module.scss';

const MovieListGenre = () => {

    const param = useParams();
    const [movieList, setMovieList] = useState([]);
    
    useEffect(()=>{
    getGenreMovieList(param.id).then(movies=>{
      setMovieList(movies);
    });

    }, [param.id])

  return (
    <div className={styles.genrePage}>
      <h2 className={styles.genreName}>{param.name}</h2>
      <div className={styles.pageInner}>
       {movieList.map(item=>{
          return <MovieListItem path={item.poster_path} title = {item.title} key = {item.id} id = {item.id}/>
        })}
      </div>       
    </div>
  )
}

export default MovieListGenre