import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getGenreMovieList } from '../../API/getGenreMovieList';
import MovieListItem from '../../components/MovieListItem/MovieListItem';
import PaginationMovie from '../../components/UI/Pagination/PaginationMovie';
import styles from './MovieListGenre.module.scss';

const MovieListGenre = () => {

    const param = useParams();
    const [movieList, setMovieList] = useState([]);
    const [totalRezults, setTotalRezults] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [currentPage, SetCurrentPage] = useState(1);
    
    useEffect(()=>{
    getGenreMovieList(param.id,currentPage).then(movies=>{
      console.log(movies);
      setMovieList(movies.results);
      setTotalRezults(movies.total_results);
      if(movies.total_pages>500){
        setTotalPages(500)
      }else {
       setTotalPages(movies.total_pages); }
    });

    }, [param.id,currentPage])
   

  return (
    <div className={styles.genrePage}>
      <div className={styles.genreInfo}>
      <p>Вибрано:</p>
      <h2 className={styles.genreName}>{param.name}</h2>
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
  )
}

export default MovieListGenre