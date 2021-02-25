import React, { Suspense, lazy } from "react";
import { Switch, Redirect } from "react-router-dom";
import Header from "utility/header/header";
import ErrorBoundary from "utility/errorboundary/errorbound";
import { AuthRoute } from "module/authentication/auth";

const Movies = lazy(() => import("module/movies/movies"));
const MovieDetail = lazy(() => import("module/moviedetail/moviedetail"));

const Home = () => {
  return (
    <>
      <ErrorBoundary>
        <Header />
        <div>
          <Suspense fallback={<div>Loading</div>}>
            <Switch>
              <AuthRoute
                exact
                path="/"
                render={() => <Redirect to="/movie" />}
              />
              <AuthRoute exact path="/movie" component={Movies} />
              <AuthRoute
                exact
                path="/movie/:title"
                component={MovieDetail}
              />
            </Switch>
          </Suspense>
        </div>
      </ErrorBoundary>
    </>
  );
};

export default Home;
