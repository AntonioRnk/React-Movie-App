import React, { useEffect, useState } from 'react'
import {useNavigate, useParams} from "react-router-dom";
import { urlPosterImg } from '../../API/config';
import { getMovieInformation } from '../../API/getMovieInformation';
import { getActorsinMovie } from '../../API/getActorsInfo';
import TrailerList from '../../components/TrailerList/TrailerList';
import MovieListRecommends from '../../components/ListRecomeds/MovieListRecommends';
import styles from './MoviePage.module.scss';
import { useDispatch } from 'react-redux';
import { searchFromGenre } from '../../redux/actions';

const MoviePage = () => {
    const param = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [movieInfo, setMovieInfo] = useState([]);
    const [actorInfo, setActorInfo] = useState([]);
    useEffect (()=>{
      getMovieInformation(param.id).then(rezult=>{
        setMovieInfo(rezult);
      });
      getActorsinMovie(param.id).then(rezult=>{
        const topTenActors = rezult.filter((item,index)=>index<10)
        setActorInfo(topTenActors);
      });
    },[param.id])
     
    function routeToGenre(id,name) {
      dispatch(searchFromGenre(id));
      navigate(`/genre/${id}/${name}`);
    }

  return (
    movieInfo.length !==0 && (<div className={styles.moviePage}>
        <div className={styles.inner}>
        <img className={styles.uaImg} src="https://i.ibb.co/hg8h1Pv/ua.png" alt="ua" />
            <div className={styles.backgroundMovie} style={{backgroundImage: `url(${urlPosterImg}${movieInfo.backdrop_path})`}}></div>
            <img className={styles.poster} src={urlPosterImg+movieInfo.poster_path} alt="movie" />
            <div className={styles.total}>
               <p>Назва: «{movieInfo.title}»</p>
               <p>Дата релізу: {movieInfo.release_date}</p>
               <p>Рейтинг: {movieInfo.vote_average}</p>
               <p>Довжина фільму: {movieInfo.runtime} хв</p>
               <div className={styles.genres}> <p>Жанри:&nbsp;</p>
                 {movieInfo.genres.map(item=>
                    <p className={styles.genreItem} key={item.id} onClick={()=>{routeToGenre(item.id,item.name)}}>{item.name};
                    &nbsp;</p>)}
               </div>
               <div className={styles.actors}> <p>Актори:&nbsp;</p>
                 <p className={styles.actorsList}>{actorInfo.map(item=>
                    <span className={styles.actorsItem} key={item.id} onClick={()=>{navigate(`/actor/${item.id}`)}}>{item.name};
                    &nbsp;</span>)}... та інші.</p>
               </div>
               <p className={styles.overview}>{movieInfo.overview}</p>
            </div>
        </div>
        <TrailerList idMovie={param.id}/>
        <MovieListRecommends idMovie={param.id}/>
      </div>)
  )
}

export default MoviePage