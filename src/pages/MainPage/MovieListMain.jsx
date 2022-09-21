import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getPopularMovie } from '../../API/getPopularMovie';
import MovieListItem from '../../components/MovieListItem/MovieListItem';
import styles from './MovieListMain.module.scss'

const MovieListMain = () => {
    
    const [movieList, setMovieList] = useState([]);
    const [size, setSize] = useState([337,232]);
    const navigate = useNavigate();
    const ref = useRef();

    const [searchMovies, isFound] = useSelector((state)=>{
      const {searchReducer} = state;
      return [searchReducer.list, searchReducer.found];
    })

    useEffect(()=>{
    const width = ref.current.offsetWidth;
    if(width<=642){
      setSize([380,270]);
    }
    if(width<600){
      setSize([450,325]);
    }
    if(width>642){
      setSize([337,232]);
    }

    if(searchMovies.length===1){
      navigate(`/movies/${searchMovies[0].id}`);
    }
    getPopularMovie().then(movies=>{
      setMovieList(movies);
    });
    }, [searchMovies, navigate])

  return (
    <div className={styles.listInner} ref={ref}>
      {!searchMovies.length && isFound && <div className={styles.listName}><h2>Популярні фільми</h2></div>}
      <div className={styles.movieList}>
      {!searchMovies.length && isFound &&
              movieList.map(item=>{
                  return  <MovieListItem path={item.poster_path} title = {item.title} key = {item.id} id = {item.id} height={size[0]} width={size[1]}/>
            })  } 
      {!!searchMovies.length && isFound &&
              searchMovies.map(item=>{    
                return <MovieListItem path={item.poster_path} title = {item.title} key = {item.id} id = {item.id} height={size[0]} width={size[1]}/>
            })  }      
      {!isFound &&
          <div className={styles.notFound}>Не знайдено, спробуйте ще раз. 😞</div>}
      </div>
    </div>
  )
}

export default MovieListMain;