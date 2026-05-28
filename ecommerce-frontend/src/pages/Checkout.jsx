// import React, { useState } from "react";
// import { FaAngleDown, FaAngleUp } from "react-icons/fa";
// import { useSelector } from "react-redux";

// const Checkout = ({setOrder}) => {
//     const [billingToggle, setBillingToggle] = useState(true);
//     const [shippingToggle, setShippingToggle] = useState(false);
//     const [paymentToggle, setPaymentToggle] = useState(false);

//     const [paymentMethod, setPaymentMethod] = useState("cod");
//     const [shippingInfo, setShippingInfo] = useState({
//         address: '',
//         city: '',
//         zip: ''
//     });

//     const cart = useSelector((state) => state.cart);
//     const navigate = useNavigate();
//     const handleOrder = () => {
//         const newOrder = {
//             products: cart.products,
//             orderNumber:'123444',
//             shippingInfo: shippingInfo,
//             totalPrice: cart.totalPrice,
//         }
//         setOrder(newOrder);
//         navigate('/order-confirmation');
//     }


//     return (
//         <div className="container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24">
//             <h3 className="text-2xl font-semibold mb-4">CHECKOUT</h3>

//             <div className="flex flex-col md:flex-row justify-between space-x-0 md:space-x-10 mt-8">
//                 <div className="md:w-2/3">

//                     {/* Billing Information */}
//                     <div className="border p-6 mb-6">
//                         <div
//                             className="flex items-center justify-between cursor-pointer"
//                             onClick={() => setBillingToggle(!billingToggle)}
//                         >
//                             <h3 className="text-lg font-semibold mb-2">Billing Information</h3>
//                             {billingToggle ? <FaAngleDown /> : <FaAngleUp />}
//                         </div>
//                         <div className={`mt-6 space-y-4 ${billingToggle ? "" : "hidden"}`}>
//                             <div>
//                                 <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
//                                 <input
//                                     type="text"
//                                     name="name"
//                                     placeholder="Enter Name"
//                                     className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                                 />
//                             </div>
//                             <div>
//                                 <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
//                                 <input
//                                     name="email"
//                                     placeholder="Enter Email"
//                                     className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                                     id="email"
//                                     type="email"
//                                 />
//                             </div>
//                             <div>
//                                 <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">Phone</label>
//                                 <input
//                                     name="phone"
//                                     placeholder="Enter Phone"
//                                     className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                                     id="phone"
//                                     type="text"
//                                 />
//                             </div>
//                         </div>
//                     </div>

//                     {/* Shipping Information */}
//                     <div className="border p-6 mb-6">
//                         <div
//                             className="flex items-center justify-between cursor-pointer"
//                             onClick={() => setShippingToggle(!shippingToggle)}
//                         >
//                             <h3 className="text-lg font-semibold mb-2">Shipping Information</h3>
//                             {shippingToggle ? <FaAngleDown /> : <FaAngleUp />}
//                         </div>
//                         <div className={`mt-6 space-y-4 ${shippingToggle ? "" : "hidden"}`}>
//                             <div>
//                                 <label className="block text-gray-700 text-sm font-bold mb-2">Address</label>
//                                 <input
//                                     type="text"
//                                     placeholder="Enter Address"
//                                     value={shippingInfo.address}
//                                     onChange={(e) => setShippingInfo({ ...shippingInfo, address: e.target.value })}
//                                     className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                                 />
//                             </div>
//                             <div>
//                                 <label className="block text-gray-700 text-sm font-bold mb-2">City</label>
//                                 <input
//                                     type="text"
//                                     placeholder="Enter City Name"
//                                     value={shippingInfo.city}
//                                     onChange={(e) => setShippingInfo({ ...shippingInfo, city: e.target.value })}
//                                     className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                                 />
//                             </div>
//                             <div>
//                                 <label className="block text-gray-700 text-sm font-bold mb-2">Zip Code</label>
//                                 <input
//                                     type="text"
//                                     placeholder="Enter Zip Code"
//                                     value={shippingInfo.zip}
//                                     onChange={(e) => setShippingInfo({ ...shippingInfo, zip: e.target.value })}
//                                     className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                                 />
//                             </div>
//                         </div>
//                     </div>

//                     {/* Payment Method */}
//                     <div className="border p-6 mb-6">
//                         <div
//                             className="flex items-center justify-between cursor-pointer"
//                             onClick={() => setPaymentToggle(!paymentToggle)}
//                         >
//                             <h3 className="text-lg font-semibold mb-2">Payment Method</h3>
//                             {paymentToggle ? <FaAngleDown /> : <FaAngleUp />}
//                         </div>
//                         <div className={`mt-6 space-y-4 ${paymentToggle ? "" : "hidden"}`}>

//                             <div className="flex items-center space-x-2">
//                                 <input
//                                     type="radio"
//                                     name="payment"
//                                     checked={paymentMethod === "cod"}
//                                     onChange={() => setPaymentMethod("cod")}
//                                 />
//                                 <label className="block text-gray-700 text-sm font-bold mb-2">Cash on Delivery</label>
//                             </div>

//                             <div className="flex items-center space-x-2">
//                                 <input
//                                     type="radio"
//                                     name="payment"
//                                     checked={paymentMethod === "dc"}
//                                     onChange={() => setPaymentMethod("dc")}
//                                 />
//                                 <label className="block text-gray-700 text-sm font-bold mb-2">Debit Card</label>
//                             </div>

//                             {paymentMethod === "dc" && (
//                                 <div className="space-y-4 border-t pt-4">
//                                     <h3 className="font-semibold text-gray-700">Debit Card Information</h3>
//                                     <div>
//                                         <label className="block text-gray-700 text-sm font-bold mb-2">Card Number</label>
//                                         <input
//                                             type="text"
//                                             placeholder="Enter Card Number"
//                                             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                                         />
//                                     </div>
//                                     <div>
//                                         <label className="block text-gray-700 text-sm font-bold mb-2">Card Holder Name</label>
//                                         <input
//                                             type="text"
//                                             placeholder="Enter Card Holder Name"
//                                             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                                         />
//                                     </div>
//                                     <div className="flex space-x-4">
//                                         <div className="flex-1">
//                                             <label className="block text-gray-700 text-sm font-bold mb-2">Expire Date</label>
//                                             <input
//                                                 type="text"
//                                                 placeholder="MM/YY"
//                                                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                                             />
//                                         </div>
//                                         <div className="flex-1">
//                                             <label className="block text-gray-700 text-sm font-bold mb-2">CVV</label>
//                                             <input
//                                                 type="text"
//                                                 placeholder="Enter CVV"
//                                                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                                             />
//                                         </div>
//                                     </div>
//                                 </div>
//                             )}

//                         </div>
//                     </div>

//                 </div>

//                 {/* RIGHT - Order Summary */}
//                 <div className="md:w-1/3 bg-white p-6 rounded-lg shadow-md border self-start">
//                     <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
//                     <div className="space-y-4 border-b pb-4">
//                         {cart.products.map((product) => (
//                             <div key={product.id} className="flex items-center justify-between">
//                                 <div className="flex items-center space-x-3">
//                                     <img src={product.image} alt="" className="w-16 h-16 object-cover" />
//                                     <div>
//                                         <h4 className="text-sm font-medium">{product.name}</h4>
//                                         <p className="text-sm text-gray-500">${product.price.toFixed(2)} x {product.qty}</p>
//                                     </div>
//                                 </div>
//                                 <p className="text-sm font-semibold">${(product.price * product.qty).toFixed(2)}</p>
//                             </div>
//                         ))}
//                     </div>
//                     <div className="flex justify-between items-center mt-4 mb-6">
//                         <span className="text-gray-700">Total Price:</span>
//                         <span className="text-lg font-bold">${cart.totalPrice.toFixed(2)}</span>
//                     </div>
//                     <button className="w-full bg-red-600 text-white py-2.5 font-semibold hover:bg-red-700 transition-colors"
//                     onClick={handleOrder}>
//                         Place Order

//                     </button>
//                 </div>

//             </div>
//         </div>
//     );
// };


// export default Checkout;





import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Checkout = ({ setOrder }) => {
  const [billingToggle, setBillingToggle] = useState(true);
  const [shippingToggle, setShippingToggle] = useState(false);
  const [paymentToggle, setPaymentToggle] = useState(false);

  const [paymentMethod, setPaymentMethod] = useState("cod");

  const [billingInfo, setBillingInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [shippingInfo, setShippingInfo] = useState({
    address: "",
    city: "",
    zip: "",
  });

  const cart = useSelector((state) => state.cart);
  const navigate = useNavigate();

  
  const handleBillingChange = (e) => {
    setBillingInfo({
      ...billingInfo,
      [e.target.name]: e.target.value,
    });
  };


  const handleOrder = () => {
    if (!shippingInfo.address || !billingInfo.name) {
      alert("Please fill all required fields");
      return;
    }

    const newOrder = {
      products: cart.products,
      orderNumber: Math.floor(Math.random() * 100000),
      billingInfo,
      shippingInfo,
      paymentMethod,
      totalPrice: cart.totalPrice,
    };

    setOrder(newOrder);
    navigate("/order-confirmation");
  };

  return (
    <div className="container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24">
      <h3 className="text-2xl font-semibold mb-4">CHECKOUT</h3>

      <div className="flex flex-col md:flex-row gap-10 mt-8">

        {/* LEFT */}
        <div className="md:w-2/3">

          {/* Billing */}
          <div className="border p-6 mb-6">
            <div
              className="flex justify-between cursor-pointer"
              onClick={() => setBillingToggle(!billingToggle)}
            >
              <h3 className="font-semibold">Billing Information</h3>
              {billingToggle ? <FaAngleDown /> : <FaAngleUp />}
            </div>

            {billingToggle && (
              <div className="mt-4 space-y-3">
                <input
                  name="name"
                  placeholder="Name"
                  value={billingInfo.name}
                  onChange={handleBillingChange}
                  className="w-full border p-2"
                />
                <input
                  name="email"
                  placeholder="Email"
                  value={billingInfo.email}
                  onChange={handleBillingChange}
                  className="w-full border p-2"
                />
                <input
                  name="phone"
                  placeholder="Phone"
                  value={billingInfo.phone}
                  onChange={handleBillingChange}
                  className="w-full border p-2"
                />
              </div>
            )}
          </div>

          {/* Shipping */}
          <div className="border p-6 mb-6">
            <div
              className="flex justify-between cursor-pointer"
              onClick={() => setShippingToggle(!shippingToggle)}
            >
              <h3 className="font-semibold">Shipping Information</h3>
              {shippingToggle ? <FaAngleDown /> : <FaAngleUp />}
            </div>

            {shippingToggle && (
              <div className="mt-4 space-y-3">
                <input
                  placeholder="Address"
                  value={shippingInfo.address}
                  onChange={(e) =>
                    setShippingInfo({ ...shippingInfo, address: e.target.value })
                  }
                  className="w-full border p-2"
                />
                <input
                  placeholder="City"
                  value={shippingInfo.city}
                  onChange={(e) =>
                    setShippingInfo({ ...shippingInfo, city: e.target.value })
                  }
                  className="w-full border p-2"
                />
                <input
                  placeholder="Zip"
                  value={shippingInfo.zip}
                  onChange={(e) =>
                    setShippingInfo({ ...shippingInfo, zip: e.target.value })
                  }
                  className="w-full border p-2"
                />
              </div>
            )}
          </div>

          {/* Payment */}
          <div className="border p-6">
            <div
              className="flex justify-between cursor-pointer"
              onClick={() => setPaymentToggle(!paymentToggle)}
            >
              <h3 className="font-semibold">Payment Method</h3>
              {paymentToggle ? <FaAngleDown /> : <FaAngleUp />}
            </div>

            {paymentToggle && (
              <div className="mt-4 space-y-3">

                <label>
                  <input
                    type="radio"
                    checked={paymentMethod === "cod"}
                    onChange={() => setPaymentMethod("cod")}
                  /> Cash on Delivery
                </label>

                <label>
                  <input
                    type="radio"
                    checked={paymentMethod === "dc"}
                    onChange={() => setPaymentMethod("dc")}
                  /> Debit Card
                </label>

                {paymentMethod === "dc" && (
                  <div className="space-y-2 mt-3">
                    <input placeholder="Card Number" className="w-full border p-2" />
                    <input placeholder="Card Holder" className="w-full border p-2" />
                  </div>
                )}
              </div>
            )}
          </div>

        </div>

        {/* RIGHT */}
        <div className="md:w-1/3 bg-white p-6 rounded shadow border">
          <h3 className="font-semibold mb-4">Order Summary</h3>

          {cart.products?.map((product) => (
            <div key={product.id} className="flex justify-between mb-2">
              <span>{product.name} x {product.qty}</span>
              <span>${(product.price * product.qty).toFixed(2)}</span>
            </div>
          ))}

          <div className="mt-4 font-bold">
            Total: ${cart.totalPrice?.toFixed(2)}
          </div>

          <button
            onClick={handleOrder}
            className="w-full bg-red-600 text-white py-2 mt-4"
          >
            Place Order
          </button>
        </div>

      </div>
    </div>
  );
};

export default Checkout;