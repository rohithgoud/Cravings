import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import { FaBars, FaSearch, FaMapMarkerAlt, FaCartPlus,FaUser } from "react-icons/fa";
import '../index.css'

const Navbar = ({cart}) => {
  const [toggle, setToggle] = useState(false)

  const handler = () =>{
    setToggle(!toggle)
  }
  return (
    
         <div className='flex justify-between py-4 w-[100%] items-center  lg:px-12  md:px-4 px-2 '>  
    <div className='flex items-center'>
    <div className='px-4' onClick={handler}>
    <FaBars size={20} className='md:hidden'/> 
    </div>
      <Link to='/'><h1 className='lg:text-4xl md:text-4xl text-3xl cursor-pointer lg:pl-10 logo underline'>Cravings!</h1></Link>
    </div>
    <div className='w-[12%] px-5 bg-gray-200 rounded-3xl hidden lg:inline-flex items-center'>
      <FaMapMarkerAlt size={20}/>
        <input className=' px-3 w-[95%] py-3 rounded-3xl bg-gray-200 outline-none' type='text' placeholder='Location' />
       </div>
       <div className='w-[35%] px-5  rounded-3xl bg-gray-200 hidden lg:inline-flex  items-center'>
        <FaSearch size={20} />
        <input className='w-[100%] px-2 py-3 rounded-3xl bg-gray-200 outline-none text-gray-80' type='text'  placeholder='Search'/>
       </div>
       <div className='flex pl-1 lg:pr-5 md:pr-2'>
        <Link to='/checkout' className='hidden lg:inline-flex md:inline-flex justify-center bg-black text-white px-3 rounded-3xl items-center mr-4 '><FaCartPlus size={16}/> <p className='pl-1 font-semibold text-sm'>Cart</p><p className=' ml-1 border-gray-100 font-semibold text-sm px-1'> {cart? cart:0}</p> </Link>
        <Link to='/login' className='hidden lg:inline-flex md:inline-flex items-center cursor-pointer px-4 py-2 bg-gray-200 rounded-3xl  mr-2 ' ><FaUser size={16}/><p className='text-md font-semibold pl-2'>Login</p></Link>
     <Link to='/signup' > <p className='  text-md cursor-pointer bg-gray-200  rounded-3xl px-4 py-2 font-semibold'>Signup</p></Link>    
    </div> 
    {/* <button className='ml-2 text-xl cursor-pointer bg-gray-200 px-3 py-1 rounded-sm' onClick={logout}>Logout</button> */}


<div className={toggle ? `md:hidden  shadow-md  flex flex-col absolute w-[65%] left-0 top-0 bg-white right-0 z-[2] h-full  pt-3 pb-6 space-y-6 transition-all duration-500 ease-in-out  `: `absolute left-[-100%]`}>
 <div className='absolute right-4 bg-gray-200 px-4 py-2 rounded-full' onClick={handler}> <span className='cursor-pointer text-2xl font-bold'>X</span></div>
 <Link to='/login'> <button className='relative top-12 left-4 text-md w-[90%] cursor-pointer bg-gray-100 rounded-md px-4 py-3 font-semibold '>Login</button></Link>
  <Link to='/'><button className='relative top-9 left-4 w-[90%]  text-md cursor-pointer bg-black text-white rounded-md px-4 py-3 font-semibold'>Signup</button></Link>
</div>


  </div>
    

    
  )
}

export default Navbar
