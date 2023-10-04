import React from 'react'
import { Link } from 'react-router-dom';

const Pagination = ({totalPost, postPerpage,setCurrentpage}) => {
    let pages=[];
   
    for(let i=1; i<=Math.ceil(totalPost/postPerpage); i++)
    {
        pages.push(i);
    }
  return (
    <ul className='flex flex-row gap-1'>
        {
            pages.map((page,index) => {
              return <li key={index} onClick={()=>setCurrentpage(page)} className='flex justify-center items-center border-[1px] w-5 h-5 bg-[#fcfcfc] rounded-lg mr-2 text-center shadow-xl'>  <Link to={`/page/${index+1}`} className="text-center">
              {page}
            </Link></li>
            })
        }
    </ul>
  )
}

export default Pagination