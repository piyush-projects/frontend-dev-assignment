import React, { lazy, Suspense } from "react";
import ReactDOM, { render } from "react-dom";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import { MessageContainer } from "utility/toastify/message/message";
import ErrorBoundary from "utility/errorboundary/errorbound";
import { AuthRoute } from "module/authentication/auth";
import reducer from "store/reducer";

const Home = lazy(() => import("module/home"));
const Login = lazy(() => import("module/login/login"));

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter basename="/">
      <ErrorBoundary>
        <Suspense fallback={<div>Loading</div>}>
          <Switch>
            <Route exact path="/login" component={Login} />
            <AuthRoute path="/" component={Home} />
          </Switch>
        </Suspense>
        <MessageContainer />
      </ErrorBoundary>
    </BrowserRouter>
  </Provider>,
  document.getElementById("component-container")
);
