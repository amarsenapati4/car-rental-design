import React from 'react'
import { useSelector } from 'react-redux';
import SearchInput from '../components/Forms/SearchInput';
import Carcard from '../components/Carcard';

const Search = () => {
  const searchData = useSelector((state) => state.search.searchData);
  return (
    <div className='w-full h-fit  flex flex-col gap-8 items-center'>
        <div className='w-full h-12 mt-2'>
        <SearchInput/>
    </div>
    <div className='w-full h-12 mt-2 flex justify-center'>
    <p> {searchData.length} result Found</p>
    </div>
          <div className='w-[60%]  h-fit grid grid-cols-3 gap-4 bg-[#edf0f6]'>
        
        {
         searchData.map((p)=>(
             <Carcard p={p}/>
         ))
        }
     </div>
    </div>
  )
}

export default Search