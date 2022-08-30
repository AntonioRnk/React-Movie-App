import React from 'react';
import { useNavigate } from 'react-router-dom';
import { urlPosterImg } from '../API/config';

const MovieListItem = ({path,title,id}) => {
const navigate = useNavigate();

  return (
    path &&
    <div className="movie-item" onClick={()=>{navigate(`/movies/${id}`)}}>
      <img className="movie-item-poster" src={urlPosterImg+path} alt={title}/>
      <div className="movie-item-play">
        <img src="https://freesvg.org/img/playbuttonclear.png" alt="play" />
      </div>
    </div>
  )
}

export default MovieListItem