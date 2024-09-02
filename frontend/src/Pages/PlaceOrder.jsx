import React, { useState, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Title from '../components/Title';
import { ShopContext } from '../context/ShopContext';

const PlaceOrder = () => {
  const location = useLocation();
  const { subtotal, delivery_fee, totalPrice } = location.state || {}; // Destructure the state
  const [method, setMethod] = useState('cod');
  const navigate = useNavigate(); // Get the navigate function
  const { cartItems, products, clearCart } = useContext(ShopContext); // Get clearCart from context

  const handlePlaceOrder = () => {
    // Prepare the ordered items
    const orderedItems = Object.entries(cartItems).map(([id, quantity]) => {
      const product = products.find((p) => p.id === parseInt(id, 10));
      return {
        title: product.title,
        quantity,
        unitPrice: product.price,
      };
    });

    // Here you can store the order details in a context or state if needed
    const orderDetails = {
      subtotal,
      delivery_fee,
      totalPrice,
      paymentMethod: method,
      orderedItems,
    };

    // Clear the cart after placing the order
    clearCart();

    // Navigate to the orders page with order details
    navigate('/orders', { state: { orderDetails } });
  };

  return (
    <div className='flex  justify-between gap-4 pt-5 sm:pt-14 min-h-[30vh] border-t'>
      {/* ---------------Left Side */}
      <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
        <div className='text-xl sm:text-xl my-3'>
          <Title text1={'DELIVERY'} text2={'Information'}/>
        </div>
        <div className='flex gap-3'>
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='First Name'/>
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Last Name'/>
        </div>
        <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="email" placeholder='Email Address'/>
        <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Street'/>
        <div className='flex gap-3'>
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Town'/>
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='City'/>
        </div>
        <div className='flex gap-3'>
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='State'/>
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Zip Code'/>
        </div>
        <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="number" placeholder='Contact Number'/>
      </div>
      
      {/* ---------------Right Side ------------------ */}
      <div className='mt-8 w-[40vh] max-h-[40vh] bg-gray-100 p-6 rounded-lg shadow-md'>
        <div>
          <div className='space-y-4'>
            <div className='flex justify-between items-center'>
              <h3 className='text-lg font-medium'>Subtotal</h3>
              <p className='text-lg font-medium'>{subtotal ? `$${subtotal.toFixed(2)}` : '$0.00'}</p>
            </div>
            <div className='flex justify-between items-center'>
              <h3 className='text-lg font-medium'>Delivery Fee</h3>
              <p className='text-lg font-medium'>{delivery_fee ? `$${delivery_fee.toFixed(2)}` : '$0.00'}</p>
            </div>
            <div className='flex justify-between items-center'>
              <h3 className='text-lg font-bold'>Total Price</h3>
              <p className='text-lg font-bold'>{totalPrice ? `$${totalPrice.toFixed(2)}` : '$0.00'}</p>
            </div>
          </div>
        </div>
        
        <div className='mt-12'>
          <Title text1={'PAYMENT'} text2={'METHOD'} />
          {/* -----------------------Payment Method Selection */}
          <div className='flex gap-3 flex-col lg:flex-row'>
            <div onClick={() => setMethod('visa')} className='flex items-center gap-3 p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'visa' ? 'bg-green-400' : ''}`}></p>
              <p className='text-sm font-medium mx-4'>Visa</p>
            </div>
            <div onClick={() => setMethod('cod')} className='flex items-center gap-3 p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'cod' ? 'bg-green-400' : ''}`}></p>
              <p className='text-sm font-medium mx-4'>Cash On Delivery</p>
            </div>
          </div>
        </div>
        <div>
          <button onClick={handlePlaceOrder} className='w-full mt-8 bg-black text-white font-medium py-2 rounded-md hover:bg-gray-900'>PLACE ORDER</button>
        </div>
      </div>
    </div>
  );
}

export default PlaceOrder;