import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { getPopularMovie } from '../../API/getPopularMovie';
import MovieListItem from '../../components/MovieListItem/MovieListItem';
import styles from './MovieListMain.module.scss'

const MovieListMain = () => {
    
    const [movieList, setMovieList] = useState([]);

    useEffect(()=>{
    getPopularMovie().then(movies=>{
      setMovieList(movies);
    });
    }, [])
    
    const [searchMovies, isFound] = useSelector((state)=>{
      const {searchReducer} = state;
      return [searchReducer.list, searchReducer.found];
    })

  return (
    <div className={styles.listInner}>
      <h2 className={styles.listName}>Популярні фільми</h2>
      <div className={styles.movieList}>
      {!searchMovies.length && isFound &&
              movieList.map(item=>{
                  return  <MovieListItem path={item.poster_path} title = {item.title} key = {item.id} id = {item.id}/>
            })  } 
      {!!searchMovies.length && isFound &&
              searchMovies.map(item=>{    
                return <MovieListItem path={item.poster_path} title = {item.title} key = {item.id} id = {item.id}/>
            })  }      
      {!isFound &&
          <div className={styles.notFound}>Не знайдено, спробуйте ще раз. 😞</div>} 
      </div>
    </div>
  )
}

export default MovieListMain;