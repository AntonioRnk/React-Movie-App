import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getSearchMovieList } from '../../../API/getSearchList';
import { searchIsFound, searchListMovies } from '../../../redux/actions';
import styles from './InputSearch.module.scss';

const InputSearch = () => {
  
  const [searchParam, SetSearchParam] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function searchRequest(e){
    e.preventDefault();
    if(searchParam){    
    getSearchMovieList(searchParam).then(rezult=>{
      if(rezult.length){
        dispatch(searchListMovies(rezult));
        dispatch(searchIsFound(true));
      } 
      else {
        dispatch(searchIsFound(false));
        dispatch(searchListMovies([]));
      }
      navigate("/");
    });
    SetSearchParam('');
   }
  }

  return (
    <form className={styles.search} action="submit" onSubmit={searchRequest}>    
        <input type="text"
        placeholder='Пошук тут ...'
        value={searchParam}
        onChange={(e)=>SetSearchParam(e.target.value)}
         />
        <button type='submit'>Пошук</button>
    </form> 
  )
}

export default InputSearch