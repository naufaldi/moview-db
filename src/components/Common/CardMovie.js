import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from './Modal';

const CardMovie = ({ imageSrc, title, type, year, urlLink, CardIndex }) => {
  const [activeModalIndex, setActiveModalIndex] = useState(null);

  const toggleModal = (ModalIndex) => {
    if (activeModalIndex === ModalIndex) setActiveModalIndex(null);
    else setActiveModalIndex(ModalIndex);
  };
  return (
    <>
      <div className="bg-white rounded-md px-4 py-6 flex flex-col h-96 transition-all transform hover:bg-gray-400 group hover:scale-105">
        <div
          className="w-full h-80 overflow-hidden rounded-md cursor-pointer"
          onClick={() => toggleModal(CardIndex)}
        >
          <img
            src={imageSrc}
            alt={title}
            className="h-full  w-full object-cover"
          />
        </div>

        <h3 className="text-xl text-black mt-1"> {title}</h3>
        <Link to={urlLink}>
          <p className="text-green-700 decoration-slice hover:bg-green-900 rounded-md px-2 py-1 text-sm hover:text-green-100 font-bold transition-all">
            Lihat Detail Movie
          </p>
        </Link>
        <div className="flex flex-col  mt-auto items-start justify-start">
          <div className="flex w-full justify-between mt-4">
            <label
              htmlFor={type}
              className="text-white px-2 py-1 text-sm bg-blue-800 rounded-md"
            >
              {type}
            </label>
            <label
              htmlFor={year}
              className="text-white px-2 py-1 text-sm bg-green-800 rounded-md"
            >
              {year}
            </label>
          </div>
        </div>
      </div>
      {activeModalIndex === CardIndex && (
        <Modal
          imgSrc={imageSrc}
          title={title}
          handleModal={() => toggleModal(CardIndex)}
        />
      )}
    </>
  );
};

export default CardMovie;
