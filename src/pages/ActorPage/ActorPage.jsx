import { CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react'
import ImageLoader from 'react-imageloader';
import {  useParams } from 'react-router-dom';
import { urlPosterImg } from '../../API/config';
import { getActorDetails, getActorPlay } from '../../API/getActorsInfo';
import Slider from '../../components/UI/Slider/Slider';
import styles from './ActorPage.module.scss'

const ActorPage = () => {
    const param = useParams();
    const [actorInfo, setActorInfo] = useState([]);
    const [actorPlay, setActorPlay] = useState([]);
    const [loading, SetLoading] = useState(true);

    function preloader() {
      return <img src="https://i.ibb.co/B4SfH9P/111111.gif" alt='loader'/>;
    }

    useEffect (()=>{
        getActorDetails(param.id, SetLoading).then(rezult=>{
          setActorInfo(rezult);
        });
        getActorPlay(param.id).then(rezult=>{
            const topTwentyMovies = rezult.filter((item,index)=>index<20);
            setActorPlay(topTwentyMovies);
          });

      },[param.id])
  
  return (
  !loading ?
  <div>
    {actorInfo.profile_path 
    ? <div className={styles.actorPage}>
       <div className={styles.inner}>
        <ImageLoader
          className={styles.poster} 
          src={urlPosterImg+actorInfo.profile_path}
          alt = {""} 
          wrapper={React.createFactory('div')}
          preloader={preloader}>
        </ImageLoader>
      <div className={styles.info}>
         <p>Им'я: {actorInfo.name}</p>
         <p>Дата народження: {actorInfo.birthday}</p>
         <p>Місце народження: {actorInfo.place_of_birth}</p>
         <p className={styles.biography}>{actorInfo.biography}</p>
        </div>
       </div>
        {actorPlay.length >= 4 &&
        <div>
        <h3>Приймав(ла) участь у фільмах:</h3> 
        <Slider listItem={actorPlay}></Slider>
        </div>}
     </div>
    : <div className={styles.actorPage}>
      <div className={styles.notFound} >Профілю не знайдено 😞</div>
      </div> }
    </div>
    : <CircularProgress className={styles.progress} size ={60}/>
  )
}

export default ActorPage