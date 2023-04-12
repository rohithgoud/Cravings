import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CheckoutCart from '../components/CheckoutCart'


const Checkout = () => {

 

  return (
    <div>
      <Navbar/>
      <div className='w-full lg:py-6 md:py-4 py-2 flex lg:flex-row md:flex-row flex-col lg:gap-6 md:gap-4 justify-center bg-gray-100 lg:px-1 px-2 md:px-2'>
      <div className='md:mb-2 lg:mb-0 mb-2'>
        <CheckoutCart/>
        </div>
       <div>
       <div className='lg:p-4 md:p-3 p-2 border-2 lg:w-[550px] bg-white md:mb-0  mb-2'>
        <div className='flex justify-between'> 
        <h2 className='text-md font-semibold'>Delivery address</h2>
        <p className='text-md font-semibold cursor-pointer text-orange-500'>CHANGE</p>
        </div>
         <p className='font-semibold mt-2'>Home</p>
         <p className='text-gray-500 text-sm '>13/1/100, Hanamkonda, Warangal, Telangana 506002, India</p>
         <p className='text-sm font-semibold mt-1'>30 MINS</p>
        </div>
        <div className='border-2 p-2 lg:p-4 md:p-2 mt-2 bg-white'>
           <h2 className='font-semibold'>Choose Payment</h2> 
           <div className='my-2'>
            <h4 className='font-semibold mb-1'>UPI</h4>
            <div className='border-2 flex p-2'> 
            <div className='mr-2' ><p className='border-2 px-2 rounded-md text-orange-500 font-semibold'>+</p></div>
            <div>
            <p className='text-orange-600 font-semibold'>Add New UPI ID</p>
            <p className='text-[13px] text-gray-600'>You need to have registered UPI id</p>
            </div>
            </div>
           </div>
           <div className='my-1'>
            <h4 className='font-semibold mb-1'>Credit and Debit cards</h4>
            <div className='border-2 flex p-2'> 
            <div className='mr-2'>
            <p className='border-2 px-2 rounded-md text-orange-500 font-semibold'>+</p>
            </div>
            <div>
            <p className='text-orange-600 font-semibold'>Add New Card</p>
            <p className='text-[13px] text-gray-600'>Save and pay via cards</p>
            </div>
            </div>
           </div>
           <div className='mt-2'>
            <h4 className='font-semibold'>More Payment Options</h4>
            <p className='text-sm text-gray-600 hover:underline'>Check out<span className='text-orange-600 font-semibold'>{'->'}</span></p>
           </div>
          <div className='flex justify-center mt-1'>
          <button className='text-center text-md cursor-pointer bg-black text-white rounded-xl  mt-2 py-3 font-semibold w-[90%]'>Continue to pay{' ->'}</button>
          </div>
       </div>
       </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Checkout
