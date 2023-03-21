import React from 'react'
import {Link} from 'react-router-dom'
import Navbar from '../components/Navbar'


const FoodPage = () => {
  return (
    <div>
      <Navbar/>
      <div className='lg:w-[77%] md:w-[80%] mt-4 px-4 lg:px-0 md:px-2 lg:mx-auto md:mx-auto py-6 grid lg:grid-cols-2 grid-cols-1 lg:gap-6'>
      
        <div >
        <img className='h-auto max-w-full '  src={'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/yhn0pldripesufdzagll'} alt="" />
        </div>
        <div className='mt-2 lg:mt-0 md:mt-2'>
          <p className='text-2xl lg:text-4xl mb-2 font-semibold '>Chicken Dum Biryani</p>
          <p className='text-xl lg:text-2xl mb-2 font-semibold '> ₹200</p>
          <p className='text-gray-700 text-md'>Made of finest basmati rice with juicy chicken.</p>
      
          <div className='flex mt-5 mb-3 bg-gray-100 lg:w-[17%] md:w-[12%]  w-[18%] justify-evenly rounded-3xl text-md  items-center gap-2'>
            <button className= 'py-1 bg-gray-100 '>-</button>
            <p className='font-semibold'>0</p>
            <button className='py-1 bg-gray-100 '>+</button>
          </div>
          <p className='text-gray-800  mb-5'>Add to customize</p>
          <Link to='/checkout'> <p className=' text-center text-md cursor-pointer bg-black text-white rounded-xl  mt-2 py-3 font-semibold lg:w-[70%]'>Add to cart</p></Link> 
        </div>
      </div>
 
    </div>
  
  )
}

export default FoodPage
