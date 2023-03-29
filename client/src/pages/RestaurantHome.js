import React from 'react'
import CardRe from '../components/CardRe'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { FaSearch} from "react-icons/fa";


const RestaurantHome = () => {
 
    const url2 = 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/ifaspooffnlarsrve0fw'; 
    const url3='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/f5opnk0mwj1odw7uie7e';
    const url4='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/ohiwzbs3yujheqglns5x';
  return (
    <div>
        <Navbar/>

<div className='lg:w-[82%] md:w-[95%]  px-2 lg:px-4 md:px-2 lg:mx-auto md:mx-auto py-6  '>
<div className='my-2 flex lg:items-center  lg:justify-between md:justify-between lg:flex-row md:flexrow flex-col '>
<div className='md:w-[82%] w-[95%] px-5  rounded-3xl bg-gray-200 flex mb-6 mx-auto lg:hidden  items-center'>
        <FaSearch size={20} />
        <input className='w-[100%] px-2 py-3 rounded-3xl bg-gray-200 outline-none text-gray-80' type='text'  placeholder='Search'/>
       </div>
<div className='pl-1'><h1 className='text-2xl lg:text-4xl mb-2 font-semibold'>GreenPark biryani house</h1>
</div>
<div className='flex pl-1'>
<p className='text-md mr-1 text-green-600 font-semibold md:mt-2'>4★</p>
<p className='text-md text-gray-700 md:mt-2'>20K Ratings</p>
</div>
</div>
<h2 className='text-xl lg:text-2xl my-5 font-semibold'>Picked for you</h2>
<div className='grid lg:grid-cols-4 md:grid-cols-3 gap-3 md:gap-6 grid-cols-2 lg:gap-10'>
<CardRe img={url3} />
<CardRe img={url3} />
<CardRe img={url4} />
<CardRe img={url2} />
</div>

<h2 className='text-xl lg:text-2xl my-4 font-semibold'>Starters</h2>
<div className='grid lg:grid-cols-4 md:grid-cols-3 gap-3 md:gap-6 grid-cols-2 lg:gap-10'>
<CardRe img={url2} />
<CardRe img={url3} />
<CardRe img={url4} />
<CardRe img={url2} />
</div>


<h2 className='text-xl lg:text-2xl my-4 font-semibold'>Main Course</h2>
<div className='grid lg:grid-cols-4 md:grid-cols-3 gap-3 md:gap-6 grid-cols-2 lg:gap-10'>
<CardRe img={url3} />
<CardRe img={url3} />
<CardRe img={url3} />
<CardRe img={url3} />

</div>

<h2 className='text-xl lg:text-2xl my-4 font-semibold'>Desserts</h2>
<div className='grid lg:grid-cols-4 md:grid-cols-3 gap-3 md:gap-6 grid-cols-2 lg:gap-10'>
<CardRe img={url4} />
<CardRe img={url4} />
<CardRe img={url4} />
<CardRe img={url4} />
</div>
</div>


<Footer/>
    </div>
  )
}

export default RestaurantHome
