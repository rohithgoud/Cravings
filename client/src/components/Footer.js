import React from 'react'
import '../index.css'
const Footer = () => {
  return (
    <div className='border-t-[1px] border-gray-300'>
      <div className=' grid lg:grid-cols-3 grid-cols-1 mx-auto lg:w-[80%] w-[95%] py-10 '>
      <div><h1 className='text-4xl  pb-2 logo underline'>Cravings!</h1></div>
      <div className='px-1'>
        <p className='text-lg text-gray-800 pb-2 hover:underline' >Get Help</p>
        <p className='text-lg text-gray-800 pb-2 hover:underline'>Contact</p>
        <p className='text-lg text-gray-800 pb-2 hover:underline'>Promotions</p>
      </div>
      <div className='px-1'>
        <p className='text-lg text-gray-800 pb-2 hover:underline'>Restaurants near me</p>
        <p className='text-lg text-gray-800 pb-2 hover:underline'>Signup deliver</p>
        <p className='text-lg text-gray-800 pb-2 hover:underline'>About Cravings</p>
        </div>
    </div>
    </div>
    
  )
}

export default Footer
