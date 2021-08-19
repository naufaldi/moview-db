import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Layout from '../components/Layout';
import apiKey from '../constant/apiKey';
import PagesMovies from '../components/MovieDetail/PagesMovies';
import Loading from '../components/Common/Loading';

const MovieDetail = () => {
  let { id } = useParams();

  const [loading, setLoading] = useState(true);

  const [movieDetail, setMovieDetail] = useState();

  const handleMovieDetail = async (id) => {
    const apiUrl = `http://www.omdbapi.com/?apikey=faf7e5bb&i=${id}`;

    try {
      const response = await axios.get(apiUrl);
      const data = response.data;
      //setState
      setLoading(false);
      setMovieDetail(data);
      console.log('List Movie', data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    handleMovieDetail(id);
  }, [id]);

  return (
    <Layout>
      <div className="py-28 max-w-screen-xl mx-auto">
        <div className="grid grid-cols-12 gap-4 w-full">
          <div className="col-span-full flex justify-between">
            <h1 className="text-2xl font-bold text-black">IMDB Movie : {id}</h1>
          </div>

          {movieDetail ? (
            <PagesMovies movieDetail={movieDetail} />
          ) : (
            <div className="col-span-3 row-span-4 row-start-2">
              <Loading />
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default MovieDetail;
