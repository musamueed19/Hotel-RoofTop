import React, { useState } from "react";

// icons import
import { IoIosSearch } from "react-icons/io";

const SearchBar = ({ query, setQuery }) => {

     const [searchValue, setSearchValue] = useState("");
    
    function handleSearch(e) {
        setSearchValue(e.target.value)
    }

    function handleKeyPress(e) {
        if (e.key === "Enter") {
            setQuery(prev => ({
                ...prev,
                search: searchValue
            }))
        }
    }

    function handleSubmit(e) {
        setQuery(prev => ({
            ...prev,
            search: searchValue
        }))
    }

  return (
    <div className="flex flex-col items-center gap-y-2">
      <h1 className="text-center w-full text-2xl md:text-4xl font-bold leading-tight">
        Explore Topics
      </h1>

      {/* searchbox */}
      <div className="relative flex items-center justify-center w-full md:max-w-3xl rounded-full p-[3px] bg-gradient">
        <div className="w-full rounded-full bg-[#fafafa] z-5 py-2 px-2 shadow-xs flex gap-x-1">
          <IoIosSearch className="sm:hidden text-purple-800 size-6 md:size-8" />

          {/* input box */}
          <input
            type="text"
            className="w-full focus:outline-none text-[17px] font-medium"
                      placeholder="Search for topics, categories..."
                      value={searchValue}
                      onChange={handleSearch}
                      onKeyUp={handleKeyPress}
          />
          <button type="submit" onClick={handleSubmit} className="hidden sm:flex px-3 cursor-pointer text-lg absolute top-0 right-0 rounded-r-full items-center justify-center font-bold text-white bg-gradient h-full">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
