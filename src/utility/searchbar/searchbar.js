import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { DebounceInput } from "react-debounce-input";
import SearchIcon from "images/search.png";
import { fetchMovies } from "services/movies/movie";
import * as actions from "store/actions";
import "./searchbar.scss";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [movieName, setMovieName] = useState("");

  const searchMovie = (movie) => {
    fetchMovies({ q: movie })
      .then((response) => {
        dispatch({ type: actions.UPDATEMOVIES, payload: response.data });
      })
      .catch((error) => console.error(error));
    setMovieName(movie);
  };

  return (
    <>
      <img src={SearchIcon} width="20px" />
      <DebounceInput
        className="search_bar"
        placeholder="Search Movie"
        type="text"
        debounceTimeout={300}
        value={movieName}
        onChange={(e) => searchMovie(e.target.value)}
      />
    </>
  );
};

export default SearchBar;
