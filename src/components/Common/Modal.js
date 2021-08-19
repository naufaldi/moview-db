import React from 'react';

const Modal = ({ handleModal, imgSrc, title }) => {
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 flex flex-col z-20">
      <div
        className="h-full w-full absolute bg-black opacity-40"
        onClick={handleModal}
      ></div>
      <div className="bg-white rounded-md mx-auto my-auto max-w-md w-full h-auto px-4 py-8 relative z-10">
        <button
          class="flex items-center justify-center h-8 w-8 absolute right-3 top-3  mt-auto font-semibold text-sm text-white transition duration-500 ease-in-out transform bg-red-600 rounded-lg  hover:bg-red-700 focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2"
          onClick={handleModal}
        >
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
        <div className="w-full h-auto overflow-hidden rounded-lg">
          <img src={imgSrc} className="h-full w-full " alt={title} />
        </div>
      </div>
    </div>
  );
};

export default Modal;
