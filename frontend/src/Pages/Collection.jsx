import React, { useContext, useState } from 'react'
import { ShopContext } from '../context/ShopContext'

const Collection = () => {
  const { products } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      {/* Filter Options */}
      <div className='min-w-60'>
        <p 
          className='my-2 text-xl flex items-center cursor-pointer gap-2'
          onClick={() => setShowFilter(!showFilter)}
        >
          FILTERS
        </p>
        {/* Category Filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden sm:block'}`}>
          {/* Add filter content here */}
        </div>
      </div>

      {/* Add product display section here */}
    </div>
  )
}

export default Collection