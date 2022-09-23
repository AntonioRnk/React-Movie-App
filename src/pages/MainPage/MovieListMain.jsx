import { CircularProgress } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getPopularMovie } from '../../API/getPopularMovie';
import MovieListItem from '../../components/MovieListItem/MovieListItem';
import styles from './MovieListMain.module.scss'

const MovieListMain = () => {
    
    const [movieList, setMovieList] = useState([]);
    const [size, setSize] = useState([337,232]);
    const [width,setWidth] = useState(0);
    const [loading, SetLoading] = useState(true);
    const navigate = useNavigate();
    const ref = useRef(null);

    const [searchMovies, isFound] = useSelector((state)=>{
      const {searchReducer} = state;
      return [searchReducer.list, searchReducer.found];
    })

    useEffect(()=>{
    if(searchMovies.length===1){
      navigate(`/movies/${searchMovies[0].id}`);
    }
    getPopularMovie(SetLoading).then(movies=>{
      setMovieList(movies);
    });

    setWidth(ref.current.offsetWidth);
    if(width<870){
      setSize([380,270]);
    }
    if(width<650){
      setSize([450,325]);
    }
    if(width>870){
      setSize([337,232]);
    }

    }, [searchMovies, navigate,width])


  return (
     <div className={styles.listInner} ref={ref}>
       {!loading && !searchMovies.length && isFound && <div className={styles.listName}><h2>Популярні фільми</h2></div>}
       {!loading ? <div className={styles.movieList}>
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
       : <CircularProgress className={styles.progress} size ={60}/>} 
    </div>
  )
}

export default MovieListMain;