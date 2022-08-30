import React, { useEffect, useState } from 'react'
import {useNavigate, useParams} from "react-router-dom";
import { urlPosterImg } from '../API/config';
import { getMovieInformation } from '../API/getMovieInformation';
import { getActorsinMovie } from '../API/getActorsInfo';
import TrailerList from './TrailerList/TrailerList';
import MovieListRecommends from './MovieListRecommends'

const MoviePage = () => {
    const param = useParams();
    const navigate = useNavigate();
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

  return (
    movieInfo.length !==0 && (<div className='movie-page'>
        <div className="movie-page__inner">
        <img className='ua-img' src="https://i.ibb.co/hg8h1Pv/ua.png" alt="ua" />
            <div className="background-movie" style={{backgroundImage: `url(${urlPosterImg}${movieInfo.backdrop_path})`}}></div>
            <img className='movie-page-poster' src={urlPosterImg+movieInfo.poster_path} alt="movie" />
            <div className="movie-page__total">
               <p>Назва: «{movieInfo.title}»</p>
               <p>Дата релізу: {movieInfo.release_date}</p>
               <p>Рейтинг: {movieInfo.vote_average}</p>
               <p>Довжина фільму: {movieInfo.runtime} хв</p>
               <div className="movie-page-genres"> <p>Жанри:</p>
                 {movieInfo.genres.map(item=>
                    <p className='movie-page-genre-item' key={item.id} onClick={()=>{navigate(`/genre/${item.id}`)}}>/{item.name}
                    </p>)}
               </div>
               <div className="movie-page-actors"> <p>Актори:&nbsp;&nbsp;</p>
                 <p>{actorInfo.map(item=>
                    <span className='movie-page-actors-item' key={item.id} onClick={()=>{navigate(`/actor/${item.id}`)}}>{item.name};&nbsp;&nbsp;
                    </span>)} </p>
               </div>
               <p>{movieInfo.overview}</p>
            </div>
        </div>
        <TrailerList idMovie={param.id}/>
        <MovieListRecommends idMovie={param.id}/>
      </div>)
  )
}


export default MoviePage