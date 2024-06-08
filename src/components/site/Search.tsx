import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa";

const Search = () => {
  const [isSearchVisible, setIsSearchVisible] = useState<boolean>(false);
  const [searchAnimation, setSearchAnimation] = useState<string|undefined>(undefined);

  const handleToggleSearch = (state: boolean) => {
    if(state) {
      setSearchAnimation('md:animate-toggle-search-open');
    } else {
      setSearchAnimation('md:animate-toggle-search-close');
    }

    setIsSearchVisible(state);
  };
  
  return (
    <div className='flex items-center justify-end basis-96 py-2 md:py-0'>
      <div className={`relative flex items-center md:items-end justify-end w-full min-w-10 min-h-8 mx-4 md:mx-0 bg-gray-100 md:bg-transparent px-2 md:px-0 py-2 md:py-0 rounded-lg`}>
        <input 
          type='text'
          placeholder='Search...'
          className={`w-full bg-transparent outline-none text-black md:text-white placeholder:text-gray-300 md:placeholder:text-gray-200 md:border-b ml-2 md:ml-0 ${isSearchVisible ? 'md:w-full md:pl-2 md:pr-12' : 'md:w-0 md:px-0'} ${searchAnimation}`}
        />
        <button 
          className='md:absolute top-0 right-0 px-3 py-2 rounded-lg transition text-gray-400 md:text-white hover:bg-white hover:text-indigo-400'
          onClick={() => handleToggleSearch(!isSearchVisible)}
        >
          <FaSearch />
        </button>
      </div>
    </div>
  );
};

export default Search;