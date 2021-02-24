import { Redirect, Route } from "react-router-dom";
import React from "react";
import axios from "axios";

const AUTH_TOKEN_KEY = "AUTH_TOKEN";

const AuthToken = {
  get() {
    return sessionStorage.getItem(AUTH_TOKEN_KEY);
  },
  set(token) {
    sessionStorage.setItem(AUTH_TOKEN_KEY, token);
  },
  clear() {
    sessionStorage.removeItem(AUTH_TOKEN_KEY);
  },
  exist() {
    return (
      sessionStorage.getItem(AUTH_TOKEN_KEY) !== "expired" &&
      sessionStorage.getItem(AUTH_TOKEN_KEY) != null
    );
  },
};

const Auth = {
  isLogin() {
    return AuthToken.exist();
  },
  getAuth() {
    return AuthToken.get();
  },
  login(token) {
    AuthToken.set(token);
  },
  logout() {
    AuthToken.clear();
  },
  isExpired() {
    return AuthToken.get() === "expired";
  },
};

export { Auth };

const Environment = {
  activeProfile: "DEV",
  DEV: {
    url: "https://wookie.codesubmit.io",
  },
};

const getActiveURL = () => {
  return Environment[Environment.activeProfile].url;
};

axios.interceptors.request.use(
  function (config) {
    const authToken = AuthToken.get();
    config.headers = {
      'Content-Type': 'application/json;charset=UTF-8',
      'Access-Control-Allow-Origin': '*',
      ...config.headers
    };
    config.baseUrl = getActiveURL();
    config.url = `${getActiveURL()}${config.url}`
    if (authToken) {
      config.headers = {
        Authorization: `Bearer ${authToken}`,
        ...config.headers,
      };
    }
    return config;
  },
  function (error) {
    console.error("axios request error ", error);
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    console.error("axios request error ", error);
    return Promise.reject(error);
  }
);
axios.thirdPartyCall = axios.create();

const AuthRoute = ({ component: Component, path, render, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() => {
        return Auth.isLogin() ? (
          Component ? (
            <Component />
          ) : (
            render()
          )
        ) : (
          <Redirect to="/login" />
        );
      }}
    />
  );
};

export { AuthRoute };
