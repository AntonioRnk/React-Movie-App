import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { getSearchMovieList } from '../../../API/getSearchList';
import styles from './InputSearch.module.scss';

const InputSearch = ({handleSearch}) => {
  
  const [searchParam, SetSearchParam] = useState('');
  const navigate = useNavigate();

  function searchRequest(e){
    e.preventDefault();
    if(searchParam){    
    getSearchMovieList(searchParam).then(rezult=>{
      if(rezult.length){
        handleSearch(rezult);
      } else {handleSearch([{notfound: true}])}
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