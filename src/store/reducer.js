import * as actions from './actions';

const initialState = {
    movieList: []
};

const reducer = (state = initialState, result) => {
  switch (result.type) {
    case actions.UPDATEMOVIES:
      return {
        ...state,
        movieList: result.payload.movies.length > 0 ? result.payload.movies : []
      };
    default:
      return state;
  }
};

export default reducer;
