import { CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { getTrailerKey } from '../../API/getTrailerKey';
import styles from './TrailerList.module.scss';

const TrailerList = ({idMovie}) => {

const [trailerItems, setTrailerItems] = useState([]);
const [isSearch, setIsSearch] = useState(false);
const [loading, SetLoading] = useState(true);

useEffect (()=>{
    getTrailerKey(idMovie,SetLoading).then(rezult=>{
       setTrailerItems(rezult); 
    })
  },[idMovie])

  return (
    !loading ?   
    <div className={styles.movieTrailer}>
      { !isSearch && trailerItems.length > 0 
        &&  <div className={styles.inner}> 
              <div className={styles.block}> 
                <iframe key={trailerItems[0].id} width="830" height="500" src= {`https://www.youtube.com/embed/${trailerItems[0].key}`} title={trailerItems[0].name} allowFullScreen loading="lazy"/>
              </div>
              {trailerItems.length > 1 
              && <button className={styles.buttonShow}  onClick={()=>{setIsSearch(!isSearch)}}>Показати більше трейлерів ...</button>
              } 
            </div>
      }
      { isSearch && trailerItems.length > 1  
        &&  <div className={styles.inner}> 
            {trailerItems.map((trailer)=>{
                return  <div className={styles.block} key={trailer.id}>
                         <iframe key={trailer.id} width="820" height="500" src= {`https://www.youtube.com/embed/${trailer.key}`} title={trailer.name} allowfullscreen loading="lazy"/>
                        </div> 
            })}
            <button className={styles.buttonShow} onClick={()=>{setIsSearch(!isSearch)}}>Cховати</button> 
           </div>
      }
      { !trailerItems.length &&
        <div className={styles.notTrailer}>Трейлерів не знайдено 😞</div>
      }
    </div>
     : <CircularProgress className={styles.progress} size ={30}/>
  )
}

export default TrailerList