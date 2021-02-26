import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import StarRatings from "react-star-ratings";
import Moment from "react-moment";
import * as actions from "store/actions";
import { fetchMovies } from "services/movies/movie";
import LoadingScreen from 'utility/loadingscreen/loadingscreen';
import "./moviedetail.scss";

const MovieDetail = () => {
  const { title } = useParams();
  const dispatch = useDispatch();
  const { movieList } = useSelector((state) => state);
  const [showSpinner, setShowSpinner] = useState(true);

  useEffect(() => {
    fetchMovies({ q: title }).then((response) => {
      dispatch({ type: actions.UPDATEMOVIES, payload: response.data });
      setShowSpinner(false);
    });
  }, [title]);

  return (
    <>
      {showSpinner ? (
        <LoadingScreen />
      ) : (
        <>
          <div className="detail_layout">
            <img
              className="image"
              src={
                movieList.filter((item) => item.title === title)[0]?.backdrop
              }
              width="400px"
              height="600px"
            />
            <div className="description">
              <div className="heading_layout">
                <h2 className="heading">
                  {`${
                    movieList.filter((item) => item.title === title)[0]?.title
                  } (${
                    movieList.filter((item) => item.title === title)[0]
                      ?.imdb_rating
                  })`}
                </h2>
                <div className="start_rating">
                  {movieList.filter((item) => item.title === title).length >
                    0 && (
                    <StarRatings
                      rating={
                        Number(
                          movieList.filter((item) => item.title === title)[0]
                            ?.imdb_rating
                        ) / 2
                      }
                      starRatedColor="--wombat-yellow"
                      starDimension="30px"
                      starSpacing="5px"
                    />
                  )}
                </div>
              </div>
              <h4 className="heading_layout">
                <Moment format="YYYY">
                  {
                    movieList.filter((item) => item.title === title)[0]
                      ?.released_on
                  }
                </Moment>
                {`| ${
                  movieList.filter((item) => item.title === title)[0]?.length
                } | ${
                  movieList.filter((item) => item.title === title)[0]?.director
                }`}
              </h4>
              <h4 className="heading_layout">{`Cast: ${
                movieList.filter((item) => item.title === title)[0]?.cast
              }`}</h4>
              <div className="heading_layout">
                {movieList.filter((item) => item.title === title)[0]?.overview}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default MovieDetail;
