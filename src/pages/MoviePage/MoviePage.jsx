import React, { useEffect, useState } from 'react'
import {Link, useParams} from "react-router-dom";
import { urlPosterImg } from '../../API/config';
import { getMovieInformation } from '../../API/getMovieInformation';
import { getActorsinMovie } from '../../API/getActorsInfo';
import MovieListRecommends from '../../components/ListRecomeds/MovieListRecommends';
import styles from './MoviePage.module.scss';
import { useDispatch } from 'react-redux';
import { searchFromGenre, searchPage } from '../../redux/actions';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { CircularProgress } from '@mui/material';
import MoviePlayer from '../../components/MoviePlayer/MoviePlayer';
import ModalMovie from '../../components/UI/Modal/ModalMovie';
import Comments from '../../components/ListComments/Comments';

const MoviePage = () => {
    const param = useParams();
    const dispatch = useDispatch();

    const [movieInfo, setMovieInfo] = useState([]);
    const [actorInfo, setActorInfo] = useState([]);
    const [loading, SetLoading] = useState(true);

    useEffect (()=>{
      getMovieInformation(param.id,SetLoading).then(rezult=>{
        setMovieInfo(rezult);
      });
      getActorsinMovie(param.id).then(rezult=>{
        const topTenActors = rezult.filter((item,index)=>index<10)
        setActorInfo(topTenActors);
      });
    },[param.id])

    function routeToGenre(id,name) {
      dispatch(searchFromGenre(id,name));
      dispatch(searchPage(1));
    }

  return (
    !loading ? (<div className={styles.moviePage}>
        <div className={styles.inner}>
        <img className={styles.uaImg} src="https://i.ibb.co/hg8h1Pv/ua.png" alt="ua" />
            <div className={styles.backgroundMovie} style={{backgroundImage: `url(${urlPosterImg}${movieInfo.backdrop_path})`}}></div>
            {movieInfo.poster_path ?    
                <LazyLoadImage
                  className={styles.poster}
                  alt={""}
                  effect="blur"
                  height={450}
                  src={urlPosterImg+movieInfo.poster_path}
                  width={300} />
                : <div className={styles.notFound}>
                   <img className={styles.poster} src="https://i.ibb.co/3BdG0wD/notfound-image.jpg" alt="notFound" />
                </div>}
         <ModalMovie idMovie ={param.id}/>
            <div className={styles.total}>
               <p>Назва: «{movieInfo.title}»</p>
               <p>Дата релізу: {movieInfo.release_date}</p>
               <p>Рейтинг: {movieInfo.vote_average}</p>
               <p>Довжина фільму: {movieInfo.runtime} хв</p>
               <div className={styles.genres}> <p>Жанри:&nbsp;</p>
                <p>{movieInfo.genres.map(item=>
                    <Link className={styles.genreItem} key={item.id} onClick={()=>{routeToGenre(item.id,item.name)}} to={'/searching'}>{item.name};&nbsp;</Link>
                  )}</p>
               </div>
               <div className={styles.actors}> <p>Актори:&nbsp;</p>
                 <p className={styles.actorsList}>{actorInfo.map(item=>
                    <Link className={styles.actorsItem} key={item.id} to={`/actor/${item.id}`}>{item.name};&nbsp;</Link>
                    )}... та інші.</p>
               </div>
               <p className={styles.overview}>{movieInfo.overview}</p>
            </div>
        </div>
        <MoviePlayer idImdb ={movieInfo.imdb_id}/>
        <MovieListRecommends idMovie={param.id}/>
        <Comments movieName={movieInfo.title} movieId={param.id}/>
      </div>)
      : <CircularProgress className={styles.progress} size ={60}/>
  )
  
}

export default MoviePage