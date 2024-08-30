// import React, {useContext, useEffect, useState} from 'react'
// import { ShopContext } from '../context/ShopContext'
// import Title from './Title'
// import ProductItem from './ProductItem';

// const LatestCollection = () => {

//     const [latestProducts,setLatestProducts] = useState([]);

//     const {products} = useContext(ShopContext);

//     useEffect(() =>{
//         setLatestProducts(products.slice(0,2));
//     },[])

//     // console.log(product);

//   return (
//     <div className='my-10'>
//         <div className='text-center py-8 text-3xl'>
//             <Title text1={'LATEST'} text2={'COLLECTION'}/>
//             <p className='w-3/4 m-auto text-xs sm:text-base text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut magna aliqua.</p>
//         </div>
//       {/* Rendering Products */}
//       <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
//         {
//           latestProducts.map((item,index) =>(
//             <ProductItem key={index} id={item.id} img={item.image} name={item.title} price={item.price}/>
//           ))
//         }
//       </div>
//     </div>
//   )
// }

// export default LatestCollection

import React, { useContext, useEffect, useState } from 'react';

import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';

const LatestCollection = () => {
  const [latestProducts, setLatestProducts] = useState([]);

  const { products } = useContext(ShopContext);

  useEffect(() => {
    setLatestProducts(products.slice(0, 8));
  }, [products]); // Added `products` as a dependency

  return (
    <div className='my-10'>
      <div className='text-center py-8 text-3xl'>
        <Title text1={'LATEST'} text2={'COLLECTION'} />
        <p className='w-3/4 m-auto text-xs sm:text-base text-gray-600'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut magna aliqua.
        </p>
      </div>
      {/* Rendering Products */}
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-2 gap-y-6'>
        {latestProducts.map((item, index) => (
          <ProductItem key={index} id={item.id} image={item.image} name={item.title} price={item.price} />
        ))}
      </div>
    </div>
  );
};

export default LatestCollection;

