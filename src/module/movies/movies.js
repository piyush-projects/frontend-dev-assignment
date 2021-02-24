import React, { useEffect } from "react";
import { fetchMovies } from "./../../services/movies/movie";
import "./movies.scss";

const Movies = () => {
  useEffect(() => {
    fetchMovies().then((response) => {
      console.log("response", response);
    });
  }, []);

  return <div>Movies List</div>;
};

export default Movies;
