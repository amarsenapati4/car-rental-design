import React from 'react'
import {GoPeople} from 'react-icons/go'
import {LuFuel} from 'react-icons/lu'
import {AiOutlineHeart} from 'react-icons/ai'
import {BsSpeedometer} from 'react-icons/bs'
import {PiSteeringWheelBold} from 'react-icons/pi'

const Carcard = ({p}) => {



  return (
  <>
  <div className='shadow-2xl w-full border-sky-950 min-h-96 bg-[#f2f6fc] rounded-2xl'>
    <div className='flex justify-center items-center p-3'>
      <img className='w-[300px] h-[200px] rounded-xl' src={`data:${p.contentType};base64,${p.photo.data.$binary.base64}`} alt="" />
      </div>
      <div className='flex flex-row justify-between mt-1 w-11/12 ml-2 '>
        <h1>{p.name}</h1>
        <p className='border-[1px] mr-1 border-dotted border-[#5ca5ee] rounded-lg text-sm w-12 flex justify-center items-center'>{p.year}</p>
      </div>
      <div className='mt-2 flex flex-col justify-center items-center'>
        <div className='flex flex-row justify-between w-11/12 items-center'>
            <p className='flex items-center gap-1'><span className='text-[#5ca5ee]'><GoPeople/></span>{p.capacity} people</p>
            <p className='flex items-center gap-1 mr-6'><span className='text-[#5ca5ee]'><LuFuel/></span>{p.fuel}</p>
        </div>
        <div className='flex flex-row justify-between w-11/12 items-center'>
            <p className='flex items-center gap-1'><span className='text-[#5ca5ee]'><BsSpeedometer/> </span> {p.chargeperlit} km/1-lit</p>
            <p className='flex items-center gap-1'><span className='text-[#5ca5ee]'><PiSteeringWheelBold/> </span> {p.transmission}</p>
        </div>
        <hr className="h-[1px] w-11/12 bg-gray-200 border-0 dark:bg-gray-700 mt-6"/>
        <div className='flex items-center justify-between w-11/12 h-auto my-2'>
            <p>${p.price}/month</p>
            <div className='flex items-center gap-2' >
                <div className='border-[1px] bg-blue-100 mb-1 w-5 h-5 text-cyan-300 flex justify-center items-center'>
             <AiOutlineHeart/>
             </div>
             <button type="button" class="text-white bg-blue-400 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 
             font-medium rounded-lg text-sm px-2 py-1 mr-2 mb-2 mt-1 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Rent Now</button>
            </div>
        </div>
      </div>
  </div>
  </>
  )
}

export default Carcard