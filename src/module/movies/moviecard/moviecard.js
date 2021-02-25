import React from 'react';
import './moviecard.scss';

const MovieCard = ({ movie }) => {
    return (
      <div className="movie_card">
        <img src={movie.poster} width="150px" height="150px"/>
        {movie.title}
      </div>
    )
}

export default MovieCard;