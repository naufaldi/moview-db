import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import apiKey from '../../constant/apiKey';
import { MovieDbContext } from '../../context/MovieDb';
import CardMovie from '../Common/CardMovie';
import Loading from '../Common/Loading';
import SearchBox from '../Common/Searchbox';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const MovieList = () => {
  const [ListMovieDb, setListMovieDb] = useContext(MovieDbContext);
  const [pagesMovies, setPagesMovies] = useState('1');

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(true);
  const [errorMessage, setErrorMessage] = useState();
  const [searchMovieName, setSearchMovieName] = useState('Batman');

  const handleMovieRequest = async (searchMovieName) => {
    const apiUrl = `http://www.omdbapi.com?apikey=${apiKey}&s=${searchMovieName}&page=${pagesMovies}`;

    try {
      const response = await axios.get(apiUrl);
      const data = response.data.Search;
      //setState
      setLoading(false);
      setListMovieDb(data);
      console.log('response.data.Response ', response.data.Response);
      console.log('List Movie', ListMovieDb);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    handleMovieRequest(searchMovieName);
  }, [searchMovieName]);
  return (
    <div className="py-28 max-w-screen-xl mx-auto">
      <div className="grid grid-cols-12 gap-4 w-full">
        <div className="col-span-full flex justify-between">
          <h1 className="text-2xl font-bold text-black"> List Movie</h1>
        </div>
        <SearchBox
          searchValue={searchMovieName}
          setSearchValue={setSearchMovieName}
        />

        <div className="col-span-full grid grid-cols-5 gap-6 mt-8">
          {ListMovieDb ? (
            ListMovieDb.map((datas, index) => (
              <CardMovie
                CardIndex={index}
                key={index}
                title={datas.Title}
                imageSrc={datas.Poster}
                type={datas.Type}
                year={datas.Year}
                id={datas.imdbID}
                urlLink={`/movie/${datas.imdbID}`}
              />
            ))
          ) : (
            <Loading />
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
