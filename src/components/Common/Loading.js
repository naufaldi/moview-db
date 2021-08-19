import React from 'react';

const Loading = () => {
  return (
    <div className="bg-white rounded-md px-4 py-6 flex flex-col">
      <div className="w-full animate-pulse bg-blue-400 h-80 overflow-hidden rounded-md"></div>
      <div className="text-xl animate-pulse bg-blue-400 mt-4 w-full"> </div>
      <div className="flex flex-col h-36 mt-auto items-start justify-start">
        <div className="flex w-full justify-between mt-4">
          <div className="text-white px-2 py-1 text-sm animate-pulse h-4 w-6 bg-blue-400 rounded-md"></div>
          <div className="text-white px-2 py-1 text-sm animate-pulse h-4 w-6 bg-blue-400 rounded-md"></div>
        </div>
        <div className="text-sm ml-auto mt-auto animate-pulse bg-blue-400 h-3 w-4  rounded-md px-2 py-1"></div>
      </div>
    </div>
  );
};

export default Loading;
