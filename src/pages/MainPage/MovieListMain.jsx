import React, { useEffect, useState } from 'react'
import { getPopularMovie } from '../../API/getPopularMovie';
import MovieListItem from '../../components/MovieListItem/MovieListItem';
import styles from './MovieListMain.module.scss'

const MovieListMain = ({searchList}) => {
    
    const [movieList, setMovieList] = useState([]);

    useEffect(()=>{
    getPopularMovie().then(movies=>{
      setMovieList(movies);
    });
    }, [])

  return (
    <div className={styles.movieList}>
    {!searchList.length && !searchList[0]?.notfound &&
            movieList.map(item=>{
                return  <MovieListItem path={item.poster_path} title = {item.title} key = {item.id} id = {item.id}/>
          })  } 
    {!!searchList.length && !searchList[0]?.notfound &&
            searchList.map(item=>{    
              return <MovieListItem path={item.poster_path} title = {item.title} key = {item.id} id = {item.id}/>
          })  }      
    {searchList[0]?.notfound &&
        <div className={styles.notFound}>Не знайдено, спробуйте ще раз. 😞</div>} 
    </div>
  )
}

export default MovieListMain;