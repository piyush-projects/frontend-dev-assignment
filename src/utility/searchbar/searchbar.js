import React, { useState } from "react";
import  SearchIcon  from "images/search.png";
import { fetchMovies } from 'services/movies/movie'; 
import {DebounceInput} from 'react-debounce-input';
import './searchbar.scss';

const SearchBar = () => {
  const [movieName, setMovieName] = useState("");

  const searchMovie = (movie) => {
    fetchMovies({q: movie}).then(response => {
      console.log('searchedMovie', response);
    })
    setMovieName(movie);
  }

  return (
    <>
      <img src={SearchIcon} width='20px'/>
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
