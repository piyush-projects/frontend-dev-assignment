import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovies } from "services/movies/movie";
import * as actions from "store/actions";
import MovieCard from "./moviecard/moviecard";
import "./movies.scss";

const Movies = () => {
  const dispatch = useDispatch();
  const { movieList } = useSelector((state) => state);
  const [genreList, setGenreList] = useState([]);

  const createGenreList = () => {
    let tempArray = [];
    for (let movie of movieList) {
      for (let genre of movie.genres) {
        let tempGenreItem = tempArray.filter((item) => item.genre === genre);
        if (tempGenreItem.length > 0) {
          tempArray.map((item) =>
            item.genre === genre
              ? { ...item, movies: item.movies.push(movie) }
              : item
          );
        } else {
          tempArray.push({
            genre,
            movies: [movie],
          });
        }
      }
    }
    return tempArray;
  };

  useEffect(() => {
    fetchMovies().then((response) => {
      console.log(response);
      dispatch({ type: actions.UPDATEMOVIES, payload: response.data });
    });
  }, []);

  useEffect(() => {
    if (movieList.length > 0) {
      setGenreList(createGenreList());
    }
  }, [movieList]);

  return genreList.map((genreItem) => (
    <>
      <div>
        <h2>{genreItem.genre}</h2>
      </div>
      <div className="card_layout">
        {genreItem.movies.map((movie) => (
          <MovieCard movie={movie} />
        ))}
      </div>
    </>
  ));
};

export default Movies;
