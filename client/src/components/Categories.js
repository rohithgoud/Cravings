import React from 'react'
import CategoryCard from './CategoryCard';



const Categories = () => {
const data = [
                {"id":1,
                 "url":"https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png",
                 "name":"Biryani"
              },
              {"id":2,
                 "url":"https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png",
                 "name":"Pizza"
              },
              {"id":3,
                 "url":"https://b.zmtcdn.com/data/dish_images/197987b7ebcd1ee08f8c25ea4e77e20f1634731334.png",
                 "name":"Chicken"
              },
              {"id":4,
                 "url":"https://b.zmtcdn.com/data/o2_assets/e444ade83eb22360b6ca79e6e777955f1632716661.png",
                 "name":"Fried Rice"
              },
              {"id":5,
                 "url":"https://b.zmtcdn.com/data/dish_images/d5ab931c8c239271de45e1c159af94311634805744.png",
                 "name":"Cake"
              },
              {"id":6,
                 "url":"https://b.zmtcdn.com/data/dish_images/e44c42ff4b60b025225c8691ef9735b11635781903.png",
                 "name":"Panner"
              },
              {"id":7,
                 "url":"https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png",
                 "name":"Burger"
              },

              {"id":8,
                 "url":"https://b.zmtcdn.com/data/dish_images/c2f22c42f7ba90d81440a88449f4e5891634806087.png",
                 "name":"Rolls"
              },
              {"id":9,
                 "url":"https://b.zmtcdn.com/data/o2_assets/8dc39742916ddc369ebeb91928391b931632716660.png",
                 "name":"Dosa"
              },
              {"id":10,
                 "url":"https://b.zmtcdn.com/data/o2_assets/4c7697178c268c50e1b1641fca205c231634401116.png",
                 "name":"Ice Cream"
              },
            

]



  return (
    <div className='lg:mb-12 md:mb-10 mb-2 mt-4'>
        <h2 className='text-2xl lg:text-4xl my-5 font-semibold pl-2'>Explore Categories</h2>
        
     <div className='grid  md:grid-cols-4  md:gap-4 grid-cols-3 gap-2 lg:gap-6'>
    
    {
      data.map((item=>{
        return(
           <CategoryCard url={item.url} name={item.name} key={item.id}/>
        )
      }))
    }
     
     </div>
 
    </div>
  )
}

export default Categories
