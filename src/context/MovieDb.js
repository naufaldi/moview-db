import React, { useState, createContext } from 'react';

const MovieDbContext = createContext();

function MovieDbProvider(props) {
  const [ListMovieDb, setListMovieDb] = useState([]);

  return (
    <MovieDbContext.Provider value={[ListMovieDb, setListMovieDb]}>
      {props.children}
    </MovieDbContext.Provider>
  );
}

export { MovieDbContext, MovieDbProvider };
