import { CircularProgress} from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getSearchMovieList} from '../../API/getSearchMovieList';
import MovieListItem from '../../components/MovieListItem/MovieListItem';
import PaginationMovie from '../../components/UI/Pagination/PaginationMovie';
import styles from './MovieListSearch.module.scss';
 
const MovieListSearch = () => {

    const [movieList, setMovieList] = useState([]);
    const [loading, SetLoading] = useState(true);
    const [totalRezults, setTotalRezults] = useState(1); 
    const [totalPages, setTotalPages] = useState(1);
    const navigate = useNavigate();

    const currentPage = useSelector((state)=>{
      const {searchReducer} = state;
      return searchReducer.page;
    })

    const dateRange = useSelector((state)=>{
      const {searchReducer} = state;
      return searchReducer.range;
    })

    const [genryId,genryName] = useSelector((state)=>{
      const {searchReducer} = state;
      return [searchReducer.genryId, searchReducer.genryName];
    })

    const [regionId,regionName] = useSelector((state)=>{
      const {searchReducer} = state;
      return [searchReducer.regionId, searchReducer.regionName];
    })

    useEffect(()=>{
      getSearchMovieList(genryId,regionId, dateRange, currentPage,SetLoading).then(movies=>{
      setMovieList(movies.results);
      setTotalRezults(movies.total_results);
      if(movies.total_pages>500){
        setTotalPages(500)
      }else {
       setTotalPages(movies.total_pages); }
    });

    }, [genryId,regionId,dateRange,currentPage,navigate])
   
   
  return (
    !loading ? 
    <div className={styles.searchPage}>
      <div className={styles.searchInfo}>
      <p>Вибрано:</p>
      {regionName && <h2>«{regionName}»</h2> }
      {genryName  && <h2>«{genryName}»</h2> }
      {!genryName && !regionName 
         && <h2>{dateRange[0]}-{dateRange[1]}</h2>
      }
      <p>Знайдено: {totalRezults}</p>
      </div>
      <div className={styles.searchInner}>
       {totalRezults ? movieList.map(item=>{
          return <MovieListItem path={item.poster_path} title = {item.title} key = {item.id} id = {item.id}/>
        })
        : <div className={styles.notFound}>Нажаль, нічого не знайшли, спробуйте змінити параметри пошуку. 😞</div>
      }
      </div>
      <div className={styles.pagination}>
      <PaginationMovie pages = {totalPages}/>
      </div>     
    </div>
    : <CircularProgress className={styles.progress} size ={60}/>
  )
}

export default MovieListSearch