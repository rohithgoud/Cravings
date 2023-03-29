import React from 'react'
import { Link } from 'react-router-dom'


const Card = () => {
    // const [cart, setCart] = useState("");

    // const handleCart = ()=>{
    //     setCart()
    // }

  return (
   
      
<div className=" bg-white mb-6  ">
    <Link to='/restauranthome'>
        <img  className='rounded-md' src='https://media.istockphoto.com/id/1086974196/photo/keema-or-kheema-biryani-fragrant-and-spicy-minced-lamb-or-goat-or-chicken-cooked-in-range-of.jpg?s=612x612&w=0&k=20&c=CSx2OuaMm0NtRKcDvCx0yME8Dd5J7OdNYuKCQME6cMk=' alt=""  loading='lazy'/>
    </Link>
    <div className="p-2">
        <Link to='/restauranthome'>
            <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 ">GreenPark Biryani House</h5>
        </Link>
       <Link to='/restauranthome'>
       <div>
        <p className=" text-sm text-gray-700 ">Biryani,Indian..</p>
        </div>
        <div className='flex justify-between mt-2'>
       <p className='bg-green-600 px-1 text-white '>4.0★</p>
        <p className=" text-sm text-gray-700 ">₹200 FOR ONE</p>
        </div>
        <p className=" text-sm text-sky-700 mt-2 hover:underline ">Free delivery</p>
       </Link>
        
    </div>
</div>

  )
}

export default Card
