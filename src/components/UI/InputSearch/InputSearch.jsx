import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getSearchMovieList } from '../../../API/getSearchList';
import { searchFromGenre, searchIsFound, searchListMovies } from '../../../redux/actions';
import styles from './InputSearch.module.scss';

const InputSearch = () => {
  
  const [searchParam, SetSearchParam] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function searchRequest(e){
    e.preventDefault();
    dispatch(searchFromGenre(''));
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
        placeholder={'Шукай фільм тут ...'}
        value={searchParam}
        onChange={(e)=>SetSearchParam(e.target.value)}
         />
        <button type='submit'>Search</button>
    </form> 
  )
}

export default InputSearch