import React, { Suspense, lazy } from "react";
import { Switch, Redirect } from "react-router-dom";
import ErrorBoundary from "utility/errorboundary/errorbound";

const Home = () => {
  return (
    <>
      <ErrorBoundary>
        <div>Home Page</div>
      </ErrorBoundary>
      {/* <Header />
      <Layout>
        <Suspense fallback={<div>Loading</div>}>
          <Switch>
            <AuthRoute
              exact
              path="/"
              render={() => (
                <ErrorBoundary>
                  <Redirect to={`/${checkRole(userInfo)}`} />
                </ErrorBoundary>
              )}
            />
          </Switch>
        </Suspense>
      </Layout> */}
    </>
  );
};

export default Home;
