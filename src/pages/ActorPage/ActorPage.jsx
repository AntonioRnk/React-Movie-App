import { CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
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
  <div className={styles.actorPageInner}>
    {actorInfo.profile_path 
    ? <div className={styles.actorPage}>
       <div className={styles.inner}>
       <LazyLoadImage
         className={styles.poster}
         alt={""}
         effect="blur"
         height={350}
         src={urlPosterImg+actorInfo.profile_path}
         width={250} />
      <div className={styles.info}>
         <p>Им'я: {actorInfo.name}</p>
         <p>Дата народження: {actorInfo.birthday}</p>
         <p>Місце народження: {actorInfo.place_of_birth}</p>
         <p className={styles.biography}>{actorInfo.biography}</p>
        </div>
       </div>
        {actorPlay.length >= 4 &&
        <div className={styles.slidePlay}>
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