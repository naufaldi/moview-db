import React from 'react';

const PagesMovies = ({ movieDetail }) => {
  return (
    <>
      <div className="col-span-3 row-span-4 row-start-2">
        <div className=" rounded-lg overflow-hidden relative">
          <label className="absolute top-0 right-0 z-10 bg-blue-200 px-2 py-1 text-sm rounded-lg text-blue-600 ">
            {movieDetail.Rated}
          </label>
          <img
            src={movieDetail.Poster}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="col-span-7 col-start-4 row-start-2 flex flex-col relative">
        <h1 className="text-black text-2xl font-bold">{movieDetail.Title}</h1>
        <p className="text-base mt-4 text-gray-900">{movieDetail.Plot}</p>
        <div className="flex justify-between mt-2 items-center">
          <div className="flex items-center">
            <p className="text-black text-base mr-2">Type :</p>
            <label className="text-base text-purple-200 bg-purple-800 px-4 py-1 rounded-md flex justify-center items-center uppercase">
              {movieDetail.Type}
            </label>
          </div>

          <div className="flex">
            <p className="text-black text-2xl mr-2">Movie Years :</p>
            <label className="text-2xl text-pink-200 bg-pink-800 px-4 py-1 rounded-md flex justify-center items-center uppercase">
              {movieDetail.Year}
            </label>
          </div>
        </div>
      </div>
      <div className="col-span-7 col-start-4 row-start-3 flex flex-col">
        <h2 className="text-xl text-black capitalize font-bold mt-7">
          Movie Information
        </h2>
        <div className="flex flex-col space-y-2 mt-4">
          <div className="flex items-center">
            <p className="mr-2 text-sm w-2/12">Released : </p>
            <p className="text-sm">{movieDetail.Released}</p>
          </div>
          <div className="flex items-center">
            <p className="mr-2 text-sm w-2/12">Production : </p>
            <p className="text-sm">{movieDetail.Production}</p>
          </div>

          <div className="flex items-center">
            <p className="mr-2 text-sm w-2/12">Genre : </p>
            <p className="text-sm">{movieDetail.Genre}</p>
          </div>
        </div>
      </div>
      <div className="col-span-7 col-start-4 row-start-4 flex flex-col">
        <h2 className="text-xl text-black capitalize font-bold ">
          IMBD Information
        </h2>
        <div className="flex flex-col space-y-2 mt-4">
          <div className="flex items-center">
            <p className="mr-2 text-sm w-2/12">Rating : </p>
            <p className="text-sm">{movieDetail.imdbRating}</p>
          </div>
          <div className="flex items-center">
            <p className="mr-2 text-sm w-2/12">Votes : </p>
            <p className="text-sm">{movieDetail.imdbVotes}</p>
          </div>

          <div className="flex items-center">
            <p className="mr-2 text-sm w-2/12">Awards : </p>
            <p className="text-sm">{movieDetail.Awards}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PagesMovies;
