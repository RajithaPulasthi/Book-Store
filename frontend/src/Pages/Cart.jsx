import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { products, currency, cartItems, updateQuantity, delivery_fee, clearCart } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const tempData = Object.entries(cartItems)
      .map(([id, quantity]) => ({
        id: parseInt(id, 10),
        quantity,
      }))
      .filter((item) => item.quantity > 0);

    console.log(tempData);
    setCartData(tempData);
  }, [cartItems]);

  // Calculate subtotal
  const subtotal = cartData.reduce((total, item) => {
    const product = products.find((p) => p.id === item.id);
    return total + (product ? product.price * item.quantity : 0);
  }, 0);

  // Total price including delivery fee
  const totalPrice = subtotal + delivery_fee;

  return (
    <div className='border-t pt-14 justify-between'>
      <div>
        {cartData.map((item) => {
          const product = products.find((p) => p.id === item.id);
          return product ? (
            <div key={item.id} className='py-4 border-t border-b text-gray-700 grid grid-cols-[3fr_1fr_1fr] sm:grid-cols-[3fr_2fr_0.6fr] items-center gap-4'>
              <div>
                <h3 className='text-xs sm:text-lg font-medium'>{product.title}</h3>
                <p>{product.price} {currency}</p>
              </div>
              <div className='flex items-center gap-5 mt-2'>
                <input
                  className='border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1'
                  type="number"
                  min={1}
                  defaultValue={item.quantity}
                  onChange={(e) => updateQuantity(item.id, parseInt(e.target.value, 10))}
                />
                <img
                  onClick={() => updateQuantity(item.id, 0)} // Set quantity to 0 to remove item
                  className='w-4 mr-4 sm:w-5 cursor-pointer'
                  src={assets.removeIcon}
                  alt="Remove"
                />
              </div>
              <p className=''>Price: {currency} {product.price * item.quantity}</p>
            </div>
          ) : null;
        })}
      </div>

      {/* Subtotal, Delivery Fee, and Total Price Section */}
      <div className='mt-4 border-t border-gray-500 pt-4 text-right'>
        <h3 className='text-lg font-medium'>Subtotal: {currency} {subtotal.toFixed(2)}</h3>
        <h3 className='text-lg font-medium'>Delivery Fee: {currency} {delivery_fee.toFixed(2)}</h3>
        <h3 className='text-lg font-bold'>Total Price: {currency} {totalPrice.toFixed(2)}</h3>
        
        <button 
          onClick={() => navigate('/place-order', { state: { subtotal, delivery_fee, totalPrice } })} 
          className={`mt-4 py-2 px-4 rounded ${cartData.length === 0 ? 'bg-gray-400 cursor-not-allowed' : 'bg-black text-white hover:bg-gray-900'}`}
          disabled={cartData.length === 0} // Disable button if cartData is empty
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

export default Cart;