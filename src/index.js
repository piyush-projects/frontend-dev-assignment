import React, { lazy, Suspense } from "react";
import ReactDOM, { render } from "react-dom";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import { Provider } from "react-redux";
import { createStore } from "redux";
import ErrorBoundary from "utility/errorboundary/errorbound";
import Login from "module/login/login"
import Movies from "module/movies/movies";
import MovieDetail from "module/moviedetail/moviedetail";

import { AuthRoute } from "module/authentication/auth";
import reducer from "store/reducer";

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <>
        <ErrorBoundary>
          <Suspense fallback={<div>Loading</div>}>
            <Switch>
              <Route exact path="/" render={() => <Redirect to="/login" />} />
              <Route exact path="/login" component={Login} />
              <AuthRoute exact path="/movies" component={Movies} />
              <AuthRoute path="/moviedetail/:title" component={MovieDetail} />
            </Switch>
          </Suspense>
        </ErrorBoundary>
      </>
    </BrowserRouter>
  </Provider>,
  document.getElementById("component-container")
);
