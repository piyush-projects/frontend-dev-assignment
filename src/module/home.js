import React, { Suspense, lazy } from "react";
import { Switch, Redirect } from "react-router-dom";
import Header from "utility/header/header";
import ErrorBoundary from "utility/errorboundary/errorbound";
import { AuthRoute } from "module/authentication/auth";

const Movies = lazy(() => import("module/movies/movies"));

const Home = () => {
  return (
    <>
      <ErrorBoundary>
        <Header />
        <Suspense fallback={<div>Loading</div>}>
          <Switch>
            <AuthRoute
              exact
              path="/home"
              component={Movies}
            />
          </Switch>
        </Suspense>
      </ErrorBoundary>
    </>
  );
};

export default Home;
