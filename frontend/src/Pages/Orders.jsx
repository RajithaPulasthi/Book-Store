import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';
import { useLocation } from 'react-router-dom';

const Orders = () => {
  const location = useLocation();
  const { orderDetails } = location.state || {}; // Retrieve order details
  const { currency } = useContext(ShopContext);

  return (
    <div className='border-t pt-16'>
      <div className='text-2xl'>
        <Title text1={'MY'} text2={'ORDERS'}/>
      </div>

      <div className='mt-8'>
        {orderDetails && orderDetails.orderedItems && orderDetails.orderedItems.length > 0 ? (
          <div className='bg-white p-6 rounded-lg shadow-md'>
            <div className='space-y-4'>
              <div className='flex justify-between items-center'>
                <h3 className='text-lg font-medium'>Payment Method</h3>
                <p className='text-lg font-medium'>{orderDetails.paymentMethod === 'cod' ? 'Cash on Delivery' : 'Online Payment'}</p>
              </div>
              <div className='flex justify-between items-center'>
                <h3 className='text-lg font-medium'>Subtotal</h3>
                <p className='text-lg font-medium'>{orderDetails.subtotal ? `$${orderDetails.subtotal.toFixed(2)}` : '$0.00'}</p>
              </div>
              <div className='flex justify-between items-center'>
                <h3 className='text-lg font-medium'>Delivery Fee</h3>
                <p className='text-lg font-medium'>{orderDetails.delivery_fee ? `$${orderDetails.delivery_fee.toFixed(2)}` : '$0.00'}</p>
              </div>
              <div className='flex justify-between items-center'>
                <h3 className='text-lg font-bold'>Total Price</h3>
                <p className='text-lg font-bold'>{orderDetails.totalPrice ? `$${orderDetails.totalPrice.toFixed(2)}` : '$0.00'}</p>
              </div>
            </div>
            
            <div className='mt-8'>
              <h3 className='text-xl font-bold'>Ordered Items</h3>
              <div className='space-y-4 mt-4'>
                {orderDetails.orderedItems.map((item, index) => (
                  <div key={index} className='bg-gray-100 p-4 rounded-md'>
                    <div className='flex justify-between items-center'>
                      <p className='text-sm font-medium'>{item.title}</p>
                      <p className='text-sm'>Quantity: {item.quantity}</p>
                      <p className='text-sm'>Unit Price: {`${currency}${item.unitPrice.toFixed(2)}`}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <p className='text-gray-500'>No orders found.</p>
        )}
      </div>
    </div>
  );
}

export default Orders;