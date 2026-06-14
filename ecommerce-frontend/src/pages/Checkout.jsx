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
import { FaAngleDown, FaAngleUp, FaCheckCircle, FaLock } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Checkout = ({ setOrder }) => {
  const [step, setStep] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState("dc");

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

  const handleBillingChange = (e) => setBillingInfo({ ...billingInfo, [e.target.name]: e.target.value });
  const handleShippingChange = (e) => setShippingInfo({ ...shippingInfo, [e.target.name]: e.target.value });

  const handleOrder = async () => {
    if (!shippingInfo.address || !billingInfo.name) {
      alert("Please fill all required fields");
      return;
    }

    const newOrder = {
      products: cart.products,
      orderNumber: Math.floor(Math.random() * 100000).toString(),
      billingInfo,
      shippingInfo,
      paymentMethod,
      totalPrice: cart.totalPrice,
    };

    try {
      const response = await fetch("http://localhost:8080/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newOrder),
      });

      if (!response.ok) throw new Error("Failed to place order on backend");
      
      const savedOrder = await response.json();
      setOrder(savedOrder);
      navigate("/order-confirmation");
    } catch (error) {
      console.error("Order submission failed:", error);
      alert("Backend is not reachable. Falling back to local state.");
      setOrder(newOrder);
      navigate("/order-confirmation");
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4 md:px-16 lg:px-24">
        
        {/* Progress Bar */}
        <div className="mb-12 max-w-3xl mx-auto flex items-center justify-between relative">
            <div className="absolute left-0 right-0 top-1/2 h-1 bg-gray-200 -z-10 transform -translate-y-1/2"></div>
            <div className={`absolute left-0 top-1/2 h-1 bg-rose-600 -z-10 transform -translate-y-1/2 transition-all duration-500`} style={{ width: step === 1 ? '0%' : step === 2 ? '50%' : '100%' }}></div>
            
            {[1, 2, 3].map((s) => (
                <div key={s} className={`flex flex-col items-center ${step >= s ? 'text-rose-600' : 'text-gray-400'}`}>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-white mb-2 transition-colors ${step >= s ? 'bg-rose-600 shadow-lg shadow-rose-200' : 'bg-gray-300'}`}>
                        {step > s ? <FaCheckCircle /> : s}
                    </div>
                    <span className="text-sm font-semibold">{s === 1 ? 'Information' : s === 2 ? 'Shipping' : 'Payment'}</span>
                </div>
            ))}
        </div>

        <div className="flex flex-col lg:flex-row gap-10 max-w-6xl mx-auto">
          {/* LEFT COLUMN - Form Steps */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
                
                {/* Step 1: Billing */}
                <div className={`p-8 border-b border-gray-100 transition-opacity duration-300 ${step !== 1 && 'opacity-50'}`}>
                    <div className="flex justify-between items-center mb-6 cursor-pointer" onClick={() => setStep(1)}>
                        <h3 className="text-2xl font-bold text-gray-800">1. Contact Information</h3>
                        {step > 1 && <span className="text-rose-600 text-sm font-semibold hover:underline">Edit</span>}
                    </div>
                    
                    {step === 1 && (
                        <div className="space-y-4 animate-fade-in">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1">Full Name</label>
                                    <input name="name" value={billingInfo.name} onChange={handleBillingChange} className="w-full border border-gray-200 rounded-xl p-3 focus:ring-2 focus:ring-rose-500 focus:outline-none" placeholder="John Doe" />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1">Email Address</label>
                                    <input name="email" value={billingInfo.email} onChange={handleBillingChange} className="w-full border border-gray-200 rounded-xl p-3 focus:ring-2 focus:ring-rose-500 focus:outline-none" placeholder="john@example.com" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-1">Phone Number</label>
                                <input name="phone" value={billingInfo.phone} onChange={handleBillingChange} className="w-full border border-gray-200 rounded-xl p-3 focus:ring-2 focus:ring-rose-500 focus:outline-none" placeholder="(555) 000-0000" />
                            </div>
                            <button onClick={() => setStep(2)} className="mt-6 bg-gray-900 hover:bg-black text-white font-semibold py-3 px-8 rounded-xl transition">Continue to Shipping</button>
                        </div>
                    )}
                </div>

                {/* Step 2: Shipping */}
                <div className={`p-8 border-b border-gray-100 transition-opacity duration-300 ${step !== 2 && 'opacity-50'}`}>
                    <div className="flex justify-between items-center mb-6 cursor-pointer" onClick={() => step > 1 && setStep(2)}>
                        <h3 className="text-2xl font-bold text-gray-800">2. Shipping Address</h3>
                        {step > 2 && <span className="text-rose-600 text-sm font-semibold hover:underline">Edit</span>}
                    </div>

                    {step === 2 && (
                        <div className="space-y-4 animate-fade-in">
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-1">Street Address</label>
                                <input name="address" value={shippingInfo.address} onChange={handleShippingChange} className="w-full border border-gray-200 rounded-xl p-3 focus:ring-2 focus:ring-rose-500 focus:outline-none" placeholder="123 Main St" />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1">City</label>
                                    <input name="city" value={shippingInfo.city} onChange={handleShippingChange} className="w-full border border-gray-200 rounded-xl p-3 focus:ring-2 focus:ring-rose-500 focus:outline-none" placeholder="New York" />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1">Zip Code</label>
                                    <input name="zip" value={shippingInfo.zip} onChange={handleShippingChange} className="w-full border border-gray-200 rounded-xl p-3 focus:ring-2 focus:ring-rose-500 focus:outline-none" placeholder="10001" />
                                </div>
                            </div>
                            <button onClick={() => setStep(3)} className="mt-6 bg-gray-900 hover:bg-black text-white font-semibold py-3 px-8 rounded-xl transition">Continue to Payment</button>
                        </div>
                    )}
                </div>

                {/* Step 3: Payment */}
                <div className={`p-8 transition-opacity duration-300 ${step !== 3 && 'opacity-50'}`}>
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-2xl font-bold text-gray-800">3. Secure Payment</h3>
                        <FaLock className="text-gray-400" />
                    </div>

                    {step === 3 && (
                        <div className="space-y-6 animate-fade-in">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <label className={`border-2 rounded-xl p-4 cursor-pointer transition ${paymentMethod === 'dc' ? 'border-rose-600 bg-rose-50' : 'border-gray-200 hover:border-gray-300'}`}>
                                    <div className="flex items-center gap-3">
                                        <input type="radio" checked={paymentMethod === 'dc'} onChange={() => setPaymentMethod('dc')} className="accent-rose-600 w-4 h-4" />
                                        <span className="font-semibold text-gray-800">Credit / Debit Card</span>
                                    </div>
                                </label>
                                <label className={`border-2 rounded-xl p-4 cursor-pointer transition ${paymentMethod === 'cod' ? 'border-rose-600 bg-rose-50' : 'border-gray-200 hover:border-gray-300'}`}>
                                    <div className="flex items-center gap-3">
                                        <input type="radio" checked={paymentMethod === 'cod'} onChange={() => setPaymentMethod('cod')} className="accent-rose-600 w-4 h-4" />
                                        <span className="font-semibold text-gray-800">Cash on Delivery</span>
                                    </div>
                                </label>
                            </div>

                            {paymentMethod === "dc" && (
                                <div className="space-y-4 bg-gray-50 p-6 rounded-2xl border border-gray-100">
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-1">Card Number</label>
                                        <input placeholder="0000 0000 0000 0000" className="w-full border border-gray-200 rounded-xl p-3 focus:ring-2 focus:ring-rose-500 focus:outline-none" />
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-1">Expiry Date</label>
                                            <input placeholder="MM/YY" className="w-full border border-gray-200 rounded-xl p-3 focus:ring-2 focus:ring-rose-500 focus:outline-none" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-1">CVC</label>
                                            <input placeholder="123" type="password" maxLength="4" className="w-full border border-gray-200 rounded-xl p-3 focus:ring-2 focus:ring-rose-500 focus:outline-none" />
                                        </div>
                                    </div>
                                </div>
                            )}

                            <button onClick={handleOrder} className="w-full mt-6 bg-rose-600 hover:bg-rose-700 shadow-lg shadow-rose-200 text-white font-bold py-4 rounded-xl transition text-lg flex items-center justify-center gap-2">
                                <FaLock /> Pay ${cart.totalPrice?.toFixed(2)}
                            </button>
                        </div>
                    )}
                </div>
            </div>
          </div>

          {/* RIGHT COLUMN - Order Summary */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 sticky top-24">
                <h3 className="text-xl font-bold text-gray-800 mb-6">Order Summary</h3>

                <div className="space-y-4 mb-6 max-h-64 overflow-y-auto pr-2">
                    {cart.products?.map((product) => (
                        <div key={product.id} className="flex gap-4 items-center">
                            <img src={product.image} className="w-16 h-16 object-cover rounded-xl border border-gray-100" alt={product.name} />
                            <div className="flex-1">
                                <h4 className="font-semibold text-gray-800 text-sm line-clamp-2">{product.name}</h4>
                                <p className="text-gray-500 text-sm">Qty: {product.qty}</p>
                            </div>
                            <span className="font-bold text-gray-800">${(product.price * product.qty).toFixed(2)}</span>
                        </div>
                    ))}
                </div>

                <div className="border-t border-gray-100 pt-6 space-y-3 text-sm">
                    <div className="flex justify-between text-gray-600">
                        <span>Subtotal</span>
                        <span>${cart.totalPrice?.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                        <span>Shipping</span>
                        <span className="text-green-600 font-semibold">Free</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                        <span>Taxes</span>
                        <span>$0.00</span>
                    </div>
                </div>

                <div className="border-t border-gray-100 mt-6 pt-6 flex justify-between items-center">
                    <span className="text-gray-800 font-bold text-lg">Total</span>
                    <span className="text-rose-600 font-bold text-2xl">${cart.totalPrice?.toFixed(2)}</span>
                </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Checkout;