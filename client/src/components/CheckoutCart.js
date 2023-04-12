import React, { useState } from 'react'
import {useSelector} from 'react-redux'
import Modal from './modals/Modal'
const CheckoutCart = () => {
  const [add, setAdd] = useState(1)
  const [showModal, setShowModal] = useState(false);

  const items = useSelector((state)=> state.cart)
  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <div className='border-2 p-2 lg:p-5 md:p-4 lg:w-[320px] bg-white'>
      <h3 className=' font-semibold'>Green Park Biryani</h3>
      <p className='text-gray-600 text-sm border-b-2 pb-2'>Hanamkonda</p>
      <div className='flex justify-between my-2 items-center'>
        <div>
            <p className='font-semibold text-sm pr-2'>Chicken Biryani</p>
            <p className='text-[13px]'>Customize <span className='text-orange-600 font-semibold'> {'>'} </span></p>
        </div>
        <div className='flex border-2 px-2   items-center '>
            <button className='px-1 text-sm' onClick={()=> setAdd( add>0? add-1 :add )}>-</button>
            <p className='text-sm px-[2px]'>{add}</p>
            <button className='px-1 text-sm'  onClick={()=> setAdd(add+1)}>+</button>
        </div>
        <p className='text-sm text-gray-700'>₹{items}</p>
      </div>
      <div className='my-2 '>
        <input type='text'  placeholder='"Any information to add"' className='bg-gray-100 px-2 py-3 w-[100%] outline-none text-sm '/>
      </div>
      <div className='border-2 text-center py-2 cursor-pointer my-2'>
        <p className='text-gray-600 text-sm font-semibold' onClick={handleOpenModal}>Apply Coupon</p>
        <Modal
         show={showModal}
         onClose={handleCloseModal}
         />
      </div>
      <div className='py-2'>
        <p className='text-sm font-semibold'>Bill Details</p>
        <div className='flex justify-between my-1'>
            <p className='text-sm text-gray-600'>Item Total</p>
            <p className='text-sm  text-gray-600'>₹170</p>
        </div>
        <div className='flex justify-between my-1'>
            <p className='text-sm text-gray-600'>Delivery Fee</p>
            <p className='text-sm text-gray-600'>₹20</p>
        </div>
        <div className='flex justify-between my-1'>
            <p className='text-sm text-gray-600'>Govt Taxes</p>
            <p className='text-sm text-gray-600'>₹10</p>
        </div>
        <div className='flex justify-between mt-2 border-t-2 py-2' >
            <p className='text-sm font-semibold'>To Pay</p>
            <p className='text-sm font-semibold'>₹200</p>
        </div>
      </div>
    </div>
  )
}

export default CheckoutCart
