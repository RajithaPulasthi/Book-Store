// import React, { useContext, useState, useEffect } from 'react'
// import {useParams} from 'react-router-dom'
// import { ShopContext } from '../context/ShopContext';

// const Product = () => {

//   const {productId} = useParams();
//   const {products} = useContext(ShopContext);
//   const [productData, setProductData] = useState(false);

//   const fetchProductData = async () =>{
//     products.map((item)=>{
//       if(item.id === productId){
//         setProductData(item)
//         console.log(item);
//         return null;
//       }
//     })
//   }

//   useEffect(()=>{
//     fetchProductData();
//   }, [productId, products])

//   return (
//     <div>
      
//     </div>
//   )
// }

// export default Product


// third try -------------------------------------------------------------

import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'

const Product = () => {
    const { productId } = useParams();
    const { products, addToCart } = useContext(ShopContext);
    const [productData, setProductData] = useState(null);
    const { currency } = useContext(ShopContext);

    useEffect(() => {
        console.log('Product component rendered. productId:', productId);
        console.log('All products:', products);

        const product = products.find(item => item.id === parseInt(productId, 10));
        if (product) {
            console.log('Found product:', product);
            setProductData(product);
        } else {
            console.log('Product not found');
        }
    }, [productId, products]);

    if (!productData) {
        return <div>Loading...</div>;
    }

    return (
        <div className='flex text-xl'>
          <div className='pt-0 px-10'>
          <img className='min-w-lg max-w-lg' src={productData.image[0]} alt={productData.title} />
          </div>
          <div className='px-20'>
          <h1 className='font-semibold text-3xl pt-0 pb-3'>{productData.title}</h1>
            <p className='pb-4 text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque cum odit consequatur voluptatem libero nulla provident velit ab aspernatur minima ipsam laudantium, quaerat minus quam corrupti, culpa quasi pariatur molestias.</p>
            <p>Author: {productData.author}</p>
            <p>Category: {productData.category}</p>
            <p>Publication Date: {productData.publicationDate}</p>
            <p>Price: {productData.price} {currency}</p>           
            <button className='bg-black text-white px-3 py-2 rounded-md text-3xl text-center mt-6' onClick={() => addToCart(productData.id)}>Add to Cart</button>
          </div>
            
        </div>
    )
}

export default Product