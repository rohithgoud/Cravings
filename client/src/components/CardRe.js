import React from 'react'
import { Link } from 'react-router-dom'

const CardRe = ({img}) => {
  return (
 
     <div className='  rounded-md'>
     <div className=" mb-6 ">
    <Link to='/foodpage'>
        <img  src={img} alt="" loading='lazy'  className='rounded-sm'/>
    </Link>
    <div className='p-2'>
        <Link to='/foodpage'>
            <h5 className="mb-2 text-md font-semibold pt-2  text-gray-900 dark:text-white">Chicken Dum Biryani</h5>
        </Link>
<Link to='/foodpage'>
    <p className=' text-gray-700'>₹200</p>
</Link>
        
    </div>
</div>
   </div>
 
  )
}

export default CardRe
