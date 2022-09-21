import { CircularProgress} from '@mui/material';
import React, { useEffect, useRef, useState } from 'react'
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
    const [size, setSize] = useState([337,232]);
    const [width,setWidth] = useState(0);
    
    const navigate = useNavigate();
    const ref = useRef(null);

    const currentPage = useSelector((state)=>{
      const {searchReducer} = state;
      return searchReducer.page;
    })

    const dateRange = useSelector((state)=>{
      const {searchReducer} = state;
      return searchReducer.range;
    })

    const [listGenre] = useSelector((state)=>{
      const {searchReducer} = state;
      return searchReducer.infoGenre;
    })

    const [listRegion] = useSelector((state)=>{
      const {searchReducer} = state;
      return searchReducer.infoRegion;
    })

    const [listActor] = useSelector((state)=>{
      const {searchReducer} = state;
      return searchReducer.infoActor;
    })

    useEffect(()=>{
      getSearchMovieList(listGenre.id,listRegion.iso_639_1, dateRange, listActor.id, currentPage,SetLoading).then(movies=>{
      setMovieList(movies.results);
      setTotalRezults(movies.total_results);
      if(movies.total_pages>500){
        setTotalPages(500)
      }else {
       setTotalPages(movies.total_pages); }
    });

      setWidth(ref.current.offsetWidth);
      if(width<=642){
        setSize([380,270]);
      }
      if(width<600){
        setSize([450,325]);
      }
      if(width>642){
        setSize([337,232]);
      }
    }, [listGenre.id,listRegion.iso_639_1,dateRange,listActor.id,currentPage,navigate,width])
    
  return (
    <div ref={ref} className={styles.totalInner}>
    {!loading ? 
    <div className={styles.searchPage}>
      <div className={styles.searchInfo}>
      <p className={styles.chose}>Вибрано:</p>
      {listRegion.english_name && <h2>«{listRegion.english_name}»</h2> }
      {listGenre.name  && <h2>«{listGenre.name}»</h2> }
      {!listGenre.name && !listRegion.english_name
         && <h2>{dateRange[0]}-{dateRange[1]}</h2>
      }
      <p>Знайдено: {totalRezults}</p>
      </div>
      <div className={styles.searchInner}>
       {totalRezults ? movieList.map(item=>{
          return <MovieListItem path={item.poster_path} title = {item.title} key = {item.id} id = {item.id} height={size[0]} width={size[1]}/>
        })
        : <div className={styles.notFound}>Нажаль, нічого не знайшли, спробуйте змінити параметри пошуку. 😞</div>
      }
      </div>
      <div className={styles.pagination}>
      <PaginationMovie pages = {totalPages}/>
      </div>     
    </div>
    : <CircularProgress className={styles.progress} size ={60}/>}
    </div>
  )
}

export default MovieListSearch