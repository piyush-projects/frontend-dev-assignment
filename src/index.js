import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

const Home = lazy(() => import('module/home'));

ReactDOM.render(
      <BrowserRouter>
        <>
          <Suspense fallback={<div>Loading</div>}>
            <Switch>
              <Route exact path="/home" component={Home} />
            </Switch>
          </Suspense>
        </>
      </BrowserRouter>,
  document.getElementById('component-container')
);
