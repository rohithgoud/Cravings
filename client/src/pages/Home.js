import React from 'react'
import Card from '../components/Card'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { FaSearch} from "react-icons/fa";
import Categories from '../components/Categories';

const Home = () => {
  return (
    <div>
   <Navbar/>
   <div className='lg:w-[82%] md:w-[95%]  px-2 lg:px-0 md:px-2 lg:mx-auto md:mx-auto py-6 '>
   <div className='md:w-[82%] w-[95%] px-5  rounded-3xl bg-gray-200 flex mb-6 mx-auto lg:hidden  items-center'>
        <FaSearch size={20} />
        <input className='w-[100%] px-2 py-3 rounded-3xl bg-gray-200 outline-none text-gray-80' type='text'  placeholder='Search'/>
       </div>
    <Categories/>
  
   <h1 className='text-2xl lg:text-4xl mb-4 font-semibold'>Popular near you</h1>
   <div className='grid lg:grid-cols-4 md:grid-cols-3  md:gap-6 grid-cols-1 gap-2 lg:gap-10'>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    </div>
    </div>
    <Footer/>
    </div>
  )
}

export default Home
