import React from 'react'

const CategoryCard = ({url, name}) => {
  return (
    <div className='flex lg:justify-between md:justify-between md:flex-row flex-col cursor-pointer items-center md:p-3 p-2 md:bg-gray-100 rounded-md'>
      <div className='hidden md:inline-flex lg:inline-flex'>
        <p className='text-lg font-semibold  '>{name}</p>
      </div>
      <div>
        <img className='w-[80px] h-[80px] rounded-full' src = {url} alt=""/>
      </div>
      <div className='md:hidden '>
        <p className='text-lg font-semibold  '>{name}</p>
      </div>
    </div>
  )
}

export default CategoryCard
