import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import MovieDetail from './pages/MovieDetail';
import { Switch, Route, Link } from 'react-router-dom';

import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { MovieDbProvider } from './context/MovieDb';

ReactDOM.render(
  <MovieDbProvider>
    <BrowserRouter>
      <React.StrictMode>
        <Switch>
          <Route path="/movie/:id" children={<MovieDetail />} />

          <Route path="/">
            <App />
          </Route>
        </Switch>
      </React.StrictMode>
    </BrowserRouter>
  </MovieDbProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
