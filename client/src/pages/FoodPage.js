import React, { useState } from 'react'
import { Toaster,toast} from 'react-hot-toast'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'


const FoodPage = () => {
  const [add, setAdd] = useState(1)
  const [data, setData] = useState(0)
  const [toggle , setToggle] = useState(false)

 

const handleChange = () =>{
 
  setData(add)
  toast.success("Added to cart", {duration:1000})
  setToggle(true)

  
}

  return (
    <div>
      <Navbar cart = {data}/>
      <Toaster position='top-center' reverseOrder={false}></Toaster>
      <div className='lg:w-[77%] md:w-[80%] mt-4 px-4 lg:px-0 md:px-2 lg:mx-auto md:mx-auto py-6 grid lg:grid-cols-2 grid-cols-1 lg:gap-6'>
      
        <div >
        <img className='h-auto max-w-full rounded-sm'  src={'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/yhn0pldripesufdzagll'} alt="" loading='lazy' />
        </div>
        <div className='mt-2 lg:mt-0 md:mt-2'>
          <p className='text-2xl lg:text-4xl mb-2 font-semibold '>Chicken Dum Biryani</p>
          <p className='text-xl lg:text-2xl mb-2 font-semibold '> ₹200</p>
          <p className='text-gray-700 text-md'>Made of finest basmati rice with juicy chicken.</p>
      
          <div className='flex mt-5 mb-3 bg-gray-100 lg:w-[17%] md:w-[12%]  w-[18%] justify-evenly rounded-3xl text-md  items-center gap-2'>
            <button className= 'py-1 bg-gray-100 ' onClick={()=> setAdd( add>0? add-1 :add )}>-</button>
            <p className='font-semibold'>{add}</p>
            <button className='py-1 bg-gray-100 ' onClick={()=> setAdd(add+1)}>+</button>
          </div>
          <p className='text-gray-800  mb-6'>Add to customize</p>
    
             
             {
              !toggle?  <button onClick={handleChange} className=' text-center text-md  bg-black text-white rounded-xl    py-3 font-semibold w-[100%] md:w-[80%] lg:w-[70%]'>Add to cart </button>:<Link to='/checkout'><p className=' text-center text-md  bg-black text-white rounded-xl  py-3 font-semibold w-[100%] md:w-[80%] lg:w-[70%]'>Checkout</p></Link>
             }

        </div>

      </div>
 

 
<Footer/>

    </div>
  
  )
}

export default FoodPage
