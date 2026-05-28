import React, { use, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import EmptyCart from "../assets/Images/emptycart.jpg";
import { FaTrashAlt } from "react-icons/fa";
import Modal from "../components/Modal";
import ChangeAddress from "../components/ChangeAddress";
import {increaseQty,decreaseQty, removeFromCart } from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";


const Cart = () => {
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();
    const [address, setAddress] = useState("main stret, 0012");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate(); 

    const handleSaveAddress = (newAddress) => {
        if (newAddress.trim()) {
            setAddress(newAddress.trim());
        }
        setIsModalOpen(false);
    };

    return (
        <div className="p-6">

            <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
                <ChangeAddress
                    currentAddress={address}
                    onSave={handleSaveAddress}
                    onCancel={() => setIsModalOpen(false)}
                />
            </Modal>

            {cart.products.length > 0 ? (
                <div>
                    <h3 className="text-xl font-bold mb-4">SHOPPING CART</h3>

                    <div className="flex flex-col lg:flex-row gap-8">

                        {/* LEFT - Product Table */}
                        <div className="flex-1">
                            <div className="grid grid-cols-5 font-bold border-b pb-2 text-sm">
                                <p className="col-span-2">PRODUCT</p>
                                <p>PRICE</p>
                                <p>QUANTITY</p>
                                <p className="grid grid-cols-2">
                                    <span>SUBTOTAL</span>
                                    <span>REMOVE</span>
                                </p>
                            </div>

                            <div className="mt-4 space-y-4">
                                {cart.products.map(product => (
                                    <div key={product.id} className="grid grid-cols-5 items-center border-b pb-4">
                                        <div className="col-span-2 flex items-center space-x-4">
                                            <img src={product.image} alt="" className="w-16 h-16 object-cover" />
                                            <h3 className="text-sm font-medium">{product.name}</h3>
                                        </div>
                                        <p className="text-sm">${product.price.toFixed(2)}</p>
                                        <div className="flex items-center space-x-2">
                                            <button className="px-2 py-0.5 bg-gray-200 hover:bg-gray-300" 
                                            onClick={() => dispatch(decreaseQty(product.id))}>
                                                -
                                            </button>
                                            <p className="w-6 text-center">{product.qty}</p>
                                            <button className="px-2 py-0.5 bg-gray-200 hover:bg-gray-300" 
                                            onClick={() => dispatch(increaseQty(product.id))}>
                                                +
                                            </button>
                                        </div>
                                        <div className="grid grid-cols-2 items-center">
                                            <p className="text-sm">${(product.qty * product.price).toFixed(2)}</p>
                                            <button
                                                className="text-red-500 hover:text-red-700"
                                                onClick={() => dispatch(removeFromCart(product.id))}
                                            >
                                                <FaTrashAlt />
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* RIGHT - Cart Totals */}
                        <div className="w-full lg:w-72 border p-6 shadow-md self-start space-y-4">
                            <h3 className="text-sm font-bold tracking-wide">CART TOTALS</h3>
                            <div className="flex justify-between text-sm border-b pb-3">
                                <span className="font-semibold">TOTAL ITEMS:</span>
                                <span>{cart.totalQty}</span>
                            </div>
                            <div className="text-sm border-b pb-3 space-y-1">
                                <p className="font-semibold">Shipping:</p>
                                <p className="text-gray-500">
                                    shipping to <span className="font-semibold text-black">{address}</span>
                                </p>
                                <button
                                    onClick={() => setIsModalOpen(true)}
                                    className="text-blue-500 hover:underline text-sm"
                                >
                                    Change Address
                                </button>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span>Total Price:</span>
                                <span className="font-semibold">${cart.totalPrice.toFixed(2)}</span>
                            </div>
                            <button className="w-full bg-red-600 text-white py-2.5 text-sm font-semibold hover:bg-red-700 transition-colors"
                                onClick={() => navigate("/checkout")}
                            >
                                Proceed to Checkout
                            </button>
                        </div>

                    </div>
                </div>
            ) : (
                <div className="flex justify-center">
                    <img src={EmptyCart} alt="Empty Cart" className="h-96" />
                </div>
            )}
        </div>
    );
};

export default Cart;