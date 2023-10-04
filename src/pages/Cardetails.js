import React, { useEffect, useState } from 'react'
import Carcard from '../components/Carcard'
import Pagination from '../components/Pagination';
import jsonFile from './test.products.json'
import SearchInput from '../components/Forms/SearchInput';
import {GrFormPreviousLink} from 'react-icons/gr'
import {GrFormNextLink} from 'react-icons/gr'

const Cardetails = () => {
    const[carddata,setCarddata]=useState([]);
    const[currentpage,setCurrentpage]=useState(1);
    const[postperpage]=useState(6);
    // `http://localhost:8080/api/v1/product/get-product`
    useEffect( ()=>{
        getAllProducts();
    },[]);
    const getAllProducts = async () => {
        try {
          setCarddata(jsonFile);
        } catch (error) {
          console.log(error);
        }
      };
    
        
    const lastPostIndex=currentpage * postperpage;
    const firstPageIndex=lastPostIndex - postperpage;
    const currentPost=carddata.slice(firstPageIndex,lastPostIndex);
  return (
 <>
<div className='w-full h-fit space-y-4'>
    <div className='container max-w-[960px] mx-auto my-4 bg-[#eff3f9] shadow-2xl p-3 rounded-full'>
        <SearchInput/>
    </div>
    <div className='grid grid-cols-3 gap-6 container max-w-[960px] mx-auto'>
        
       {
        currentPost.map((p)=>(
            <Carcard p={p}/>
        ))
       }
    </div>
    <div className='w-full max-w-[960px] mx-auto  h-12 flex justify-between  mb-2 rounded-full items-center bg-[#eff3f9] my-6 p-3 container shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
        <div className='ml-2'>{lastPostIndex} out of {carddata.length}</div>
        <div className='flex items-center space-x-2'>
        <button className='flex justify-center items-center border-[1px] w-5 h-5 bg-[#fcfcfc] rounded-lg mr-2 text-center shadow-xl'  onClick={() => {
            if (currentpage > 1 && currentpage<=60) {
                setCurrentpage(currentpage - 1);
            }
        }}><GrFormPreviousLink/></button>
        <Pagination totalPost={carddata.length} postPerpage={postperpage} setCurrentpage={setCurrentpage}/>
        <button onClick={() => {
            if (currentpage < 10) {
                setCurrentpage(currentpage + 1);
            }
        }} className='flex justify-center items-center border-[1px] w-5 h-5 bg-[#fcfcfc] rounded-lg mr-2 text-center shadow-xl' ><GrFormNextLink/></button>
        </div>
    </div>
</div>
 </>
  )
}

export default Cardetails