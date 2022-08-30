import React, { useEffect, useState } from 'react'
import {  useParams } from 'react-router-dom';
import { urlPosterImg } from '../../API/config';
import { getActorDetails, getActorPlay } from '../../API/getActorsInfo';
import Slider from '../UI/Slider/Slider';
import styles from './ActorPage.module.scss'

const ActorPage = () => {
    const param = useParams();
    const [actorInfo, setActorInfo] = useState([]);
    const [actorPlay, setActorPlay] = useState([]);

    useEffect (()=>{
        getActorDetails(param.id).then(rezult=>{
          setActorInfo(rezult);
        });
        getActorPlay(param.id).then(rezult=>{
            const topTwentyMovies = rezult.filter((item,index)=>index<20);
            setActorPlay(topTwentyMovies);
          });

      },[param.id])

  return (
    actorInfo.profile_path 
    ? <div className={styles.actorPage}>
       <div className={styles.inner}>
        <img className={styles.poster} src={urlPosterImg+actorInfo.profile_path} alt="" />
      <div className={styles.info}>
         <p>Им'я: {actorInfo.name}</p>
         <p>Дата народження: {actorInfo.birthday}</p>
         <p>Місце народження: {actorInfo.place_of_birth}</p>
         <p>{actorInfo.biography}</p>
        </div>
       </div>
      <div>
        {actorPlay.length >= 4 && <Slider listItem={actorPlay}></Slider>}
      </div>
     </div>
    : <div className={styles.actorPage}>
      <div>Профілю не знайдено 😞</div>
      </div>
  )
}

export default ActorPage