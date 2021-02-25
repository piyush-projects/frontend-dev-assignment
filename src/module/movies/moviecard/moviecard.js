import React from "react";
import { useHistory } from "react-router-dom";
import "./moviecard.scss";

const MovieCard = ({ movie }) => {
  const history = useHistory();

  const itemClicked = () => {
    history.push(`/moviedetail/${movie.title}`)
  };
  return (
    <div className="movie_card" onClick={itemClicked}>
      <img src={movie.poster} width="150px" height="150px" />
      {movie.title}
    </div>
  );
};

export default MovieCard;
