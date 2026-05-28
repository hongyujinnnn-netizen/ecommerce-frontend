// // 
// import React from "react";

// const Order = ({ order }) => {
//     if (!order) {
//         return <div className="text-center mt-10">No order found.</div>;
//     }

//     return ( 
//         <div className="container mx-auto p-4">
//             <h3>Thank you for your order!</h3>
//             <p>Your order has been received and is being processed.</p>
            
//             <div className="border p-4 mt-4">
//                 <h3>Order Details</h3>
//                 <p>Order Number: {order.orderNumber}</p>
                
//                 <div className="mt-4">
//                     <h2>Shipping Information</h2>
//                     <p>Name: {order.shippingInfo.name}</p>
//                     <p>Address: {order.shippingInfo.address}</p>
//                     <p>City: {order.shippingInfo.city}</p>
//                     <p>Zip Code: {order.shippingInfo.zipCode}</p>
//                 </div>

//                 <div className="mt-4">
//                     <h3>Products Ordered</h3>
//                     {order.products.map((product, index) => (
//                         <div key={index} className="flex justify-between border-b py-2">
//                             <p>{product.name} X {product.quantity}</p>
//                             <p>${(product.price * product.quantity).toFixed(2)}</p>
//                         </div>
//                     ))}
//                 </div>

//                 <div className="mt-4 font-bold text-xl">
//                     <span>Total Price: </span>
//                     <span>${order.totalPrice.toFixed(2)}</span>
//                 </div>

//                 <div className="mt-6 space-x-4">
//                     <button className="bg-blue-500 text-white px-4 py-2">Order Tracking</button>
//                     <button className="bg-gray-200 px-4 py-2">Continue Shopping</button>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Order;

import React from "react";
import { useNavigate } from "react-router-dom";

const Order = ({ order }) => {
  const navigate = useNavigate();

  if (!order) {
    return (
      <div className="text-center py-20">
        <h2 className="text-xl font-semibold">No order found</h2>
        <button
          onClick={() => navigate("/shop")}
          className="mt-4 px-4 py-2 bg-black text-white rounded"
        >
          Go Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-10 px-4">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-3xl mx-auto">
        
        <h2 className="text-2xl font-bold mb-4 text-green-600">
          Thank you for your order!
        </h2>

        <p className="mb-6 text-gray-600">
          Your order has been received and is being processed.
        </p>

        {/* Order Info */}
        <div className="mb-6">
          <h3 className="font-semibold text-lg">Order Details</h3>
          <p className="text-gray-700">
            Order Number: #{order.orderNumber}
          </p>
        </div>

        {/* Shipping */}
        <div className="mb-6">
          <h3 className="font-semibold text-lg">Shipping Information</h3>
          <p>{order.shippingInfo.name}</p>
          <p>{order.shippingInfo.address}</p>
          <p>
            {order.shippingInfo.city}, {order.shippingInfo.zipCode}
          </p>
        </div>

        {/* Products */}
        <div className="mb-6">
          <h3 className="font-semibold text-lg">Products Ordered</h3>

          {order.products.map((product, index) => (
            <div
              key={index}
              className="flex justify-between border-b py-2"
            >
              <span>
                {product.name} × {product.qty}
              </span>
              <span>
                ${product.price * product.qty}
              </span>
            </div>
          ))}
        </div>

        {/* Total */}
        <div className="flex justify-between font-bold text-lg mb-6">
          <span>Total Price:</span>
          <span>${order.totalPrice.toFixed(2)}</span>
        </div>

        {/* Actions */}
        <div className="flex gap-4">
          <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            Track Order
          </button>

          <button
            onClick={() => navigate("/shop")}
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default Order;