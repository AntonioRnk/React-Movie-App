import { CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { getSearchMovieList} from '../../API/getSearchMovieList';
import MovieListItem from '../../components/MovieListItem/MovieListItem';
import PaginationMovie from '../../components/UI/Pagination/PaginationMovie';
import styles from './MovieListGenre.module.scss';

const MovieListGenre = () => {

    const [movieList, setMovieList] = useState([]);
    const [loading, SetLoading] = useState(true);
    const [totalRezults, setTotalRezults] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [currentPage, SetCurrentPage] = useState(1);

    const [genryId,genryName] = useSelector((state)=>{
      const {searchReducer} = state;
      return [searchReducer.genryId, searchReducer.genryName];
    })

    const [regionId,regionName] = useSelector((state)=>{
      const {searchReducer} = state;
      return [searchReducer.regionId, searchReducer.regionName];
    })

    useEffect(()=>{
      getSearchMovieList(genryId,regionId,currentPage,SetLoading).then(movies=>{
      setMovieList(movies.results);
      setTotalRezults(movies.total_results);
      if(movies.total_pages>500){
        setTotalPages(500)
      }else {
       setTotalPages(movies.total_pages); }
    });

    }, [genryId,regionId,currentPage,])
   

  return (
    !loading ? 
    <div className={styles.genrePage}>
      <div className={styles.genreInfo}>
      <p>Вибрано:</p>
      {genryName ? <h2 className={styles.genreName}>{genryName}</h2>
      : <h2 className={styles.genreName}>{regionName}</h2>
      }
      <p>Знайдено: {totalRezults}</p>
      </div>
      <div className={styles.pageInner}>
       {movieList.map(item=>{
          return <MovieListItem path={item.poster_path} title = {item.title} key = {item.id} id = {item.id}/>
        })}
      </div>
      <div className={styles.pagination}>
      <PaginationMovie pages = {totalPages} currentPage = {currentPage} handleCurrent = {SetCurrentPage}/>
      </div>     
    </div>
    : <CircularProgress className={styles.progress} size ={60}/>
  )
}

export default MovieListGenre