import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovies } from "services/movies/movie";
import Header from "utility/header/header";
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
      dispatch({ type: actions.UPDATEMOVIES, payload: response.data });
    });
  }, []);

  useEffect(() => {
    if (movieList.length > 0) {
      setGenreList(createGenreList());
    } else {
      setGenreList([]);
    }
  }, [movieList]);

  return (
    <>
      <Header />
      {genreList.length > 0 ? genreList.map((genreItem, genrekey) => (
        <div key={genrekey}>
          <div className="row">
            <h2>{genreItem.genre}</h2>
          </div>
          <div className="card_layout">
            {genreItem.movies.map((movie, movieKey) => (
              <div key={movieKey}>
                <MovieCard movie={movie} />
              </div>  
            ))}
          </div>
        </div>
      )) : <div>No Result Found</div>}
    </>
  );
};

export default Movies;
