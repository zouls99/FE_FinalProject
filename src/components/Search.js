import React from 'react';

const Search = ({ searchTerm, onSearch, onSearchTermChange }) => {
  const handleSearchClick = () => {
    onSearch(searchTerm);
  };

  return (
    <div className="bg-slate-800 w-full">
      <div className="w-full flex items-center justify-center py-5">
        <input
          type="text"
          placeholder="Type a movie name ..."
          className="text-[19px] mr-4 outline-none rounded-md p-2 w-[40%]"
          value={searchTerm}
          onChange={(e) => onSearchTermChange(e.target.value)}
          onBlur={() => {
            if (!searchTerm) {
              onSearchTermChange('');
            }
          }}
        />
        <button
          className="border border-white rounded-md p-2 text-white font-bold mr-2"
          onClick={handleSearchClick}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
