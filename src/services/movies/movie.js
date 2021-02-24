import axios from "axios";

export const fetchMovies = (searchParam) => {
    return axios.get("/movies", {params: searchParam})
};
