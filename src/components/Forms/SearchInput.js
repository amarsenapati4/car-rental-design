import React, { useState } from 'react';
import jsonFile from '../../pages/test.products.json';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { storeSearchData } from '../../redux/searchSlice';
import { GoSearch } from 'react-icons/go';

const SearchInput = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const filteredResults = jsonFile.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())

      );
      console.log("Filtered Result", filteredResults);
      dispatch(storeSearchData(filteredResults));
      setSearchResults(filteredResults);
      navigate("/search");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      {/* <div className="max-w-md mx-auto mt-8 p-4">
      <input
        type="text"
        placeholder="Search by name"
        value={searchTerm}
        onChange={handleSearch}
        className="w-full border rounded py-2 px-3 mb-4"
      />
        {searchResults.map((item) => (
         <Carcard p={item}/>
        ))}
     
    </div> */}
      <form className="flex justify-between items-center bg-white px-2 pr-4 rounded-full overflow-hidden w-full max-w-sm" role="search" onSubmit={handleSearch}>
        <input
          className="p-2 outline-none grow"
          type="text"
          placeholder="Search..."
          aria-label="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <button type="submit" className='rounded-md' >
            <GoSearch/>
        </button>

      </form>

    </>
  )
}

export default SearchInput