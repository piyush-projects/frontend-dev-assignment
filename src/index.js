import React, { lazy, Suspense } from "react";
import ReactDOM, { render } from "react-dom";

import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

const Login = lazy(() => import("module/login/login"));
const Home = lazy(() => import("module/home"));

import { AuthRoute } from "module/authentication/auth";

ReactDOM.render(
  <BrowserRouter>
    <>
      <Suspense fallback={<div>Loading</div>}>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/login" />} />
          <Route exact path="/login" component={Login} />
          <AuthRoute exact path="/home" component={Home} />
        </Switch>
      </Suspense>
    </>
  </BrowserRouter>,
  document.getElementById("component-container")
);
