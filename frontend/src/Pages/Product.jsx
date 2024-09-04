import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { ShopContext } from '../context/ShopContext';
import { images } from '../assets/assets.js';

const Product = () => {
    const { productId } = useParams();
    const { addToCart } = useContext(ShopContext);
    const [productData, setProductData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { currency } = useContext(ShopContext);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`http://localhost:8091/the-knowledge-hub-api/products/${productId}`);
                setProductData(response.data);
            } catch (err) {
                setError('Error fetching product data');
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [productId]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className='flex text-xl'>
            <div className='pt-0 px-10'>
                <img className='min-w-lg max-w-lg' src={images[`book${productData.bookID}`]} alt={productData.name} />
            </div>
            <div className='px-20'>
                <h1 className='font-semibold text-3xl pt-0 pb-3'>{productData.name}</h1>
                <p className='pb-4 text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque cum odit consequatur voluptatem libero nulla provident velit ab aspernatur minima ipsam laudantium, quaerat minus quam corrupti, culpa quasi pariatur molestias.</p>
                <p>Author: {productData.author}</p>
                <p>Genre: {productData.genre}</p>
                <p>Published Year: {productData.publishedYear}</p>
                <p>Price: {productData.price} {currency}</p>
                <button className='bg-black text-white px-3 py-2 rounded-md text-3xl text-center mt-6' onClick={() => addToCart(productData.bookID)}>Add to Cart</button>
            </div>
        </div>
    );
};

export default Product;
