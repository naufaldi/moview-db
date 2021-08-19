import React from 'react';

const SearchBox = (props) => {
  return (
    <div className="col-span-8 col-start-3">
      <input
        type="text"
        onChange={(event) => props.setSearchValue(event.target.value)}
        className="w-full text-base text-black px-8 py-3 rounded-lg"
      />
    </div>
  );
};

export default SearchBox;
