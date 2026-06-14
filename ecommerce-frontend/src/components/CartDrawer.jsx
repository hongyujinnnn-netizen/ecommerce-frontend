import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaTimes, FaTrashAlt, FaArrowRight, FaShoppingCart } from 'react-icons/fa';
import { increaseQty, decreaseQty, removeFromCart } from '../redux/cartSlice';
import { useNavigate } from 'react-router-dom';

const CartDrawer = ({ isOpen, onClose }) => {
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    if (!isOpen) return null;

    const handleCheckout = () => {
        onClose();
        navigate('/checkout');
    };

    return (
        <div className="fixed inset-0 z-[100] flex justify-end">
            {/* Backdrop */}
            <div 
                className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            ></div>

            {/* Drawer */}
            <div className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col animate-slide-in-right">
                
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-100">
                    <h2 className="text-2xl font-bold text-gray-800">Your Cart</h2>
                    <button 
                        onClick={onClose}
                        className="p-2 text-gray-400 hover:text-rose-600 hover:bg-rose-50 rounded-full transition"
                    >
                        <FaTimes className="text-xl" />
                    </button>
                </div>

                {/* Cart Items */}
                <div className="flex-1 overflow-y-auto p-6 space-y-6">
                    {cart.products.length === 0 ? (
                        <div className="text-center text-gray-500 mt-20 flex flex-col items-center">
                            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                                <FaShoppingCart className="text-4xl text-gray-300" />
                            </div>
                            <p className="text-lg font-medium">Your cart is empty.</p>
                            <button 
                                onClick={() => { onClose(); navigate('/shop'); }}
                                className="mt-6 text-rose-600 font-medium hover:underline"
                            >
                                Continue Shopping
                            </button>
                        </div>
                    ) : (
                        cart.products.map(product => (
                            <div key={product.id} className="flex gap-4 p-4 bg-gray-50 rounded-2xl border border-gray-100">
                                <img src={product.image} alt={product.name} className="w-20 h-20 object-cover rounded-xl" />
                                
                                <div className="flex-1 flex flex-col justify-between">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h3 className="font-semibold text-gray-800 line-clamp-1">{product.name}</h3>
                                            <p className="text-rose-600 font-bold">${product.price.toFixed(2)}</p>
                                        </div>
                                        <button 
                                            onClick={() => dispatch(removeFromCart(product.id))}
                                            className="text-gray-400 hover:text-red-500 transition p-1"
                                        >
                                            <FaTrashAlt />
                                        </button>
                                    </div>
                                    
                                    <div className="flex items-center justify-between mt-2">
                                        <div className="flex items-center border border-gray-200 rounded-lg bg-white overflow-hidden">
                                            <button 
                                                className="px-3 py-1 hover:bg-gray-100 transition text-gray-600 font-medium"
                                                onClick={() => dispatch(decreaseQty(product.id))}
                                            >-</button>
                                            <span className="px-3 py-1 text-sm font-semibold border-x border-gray-200">{product.qty}</span>
                                            <button 
                                                className="px-3 py-1 hover:bg-gray-100 transition text-gray-600 font-medium"
                                                onClick={() => dispatch(increaseQty(product.id))}
                                            >+</button>
                                        </div>
                                        <span className="font-bold text-gray-800">
                                            ${(product.price * product.qty).toFixed(2)}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {/* Footer */}
                {cart.products.length > 0 && (
                    <div className="p-6 bg-gray-50 border-t border-gray-200">
                        <div className="flex justify-between mb-4 text-gray-600">
                            <span>Subtotal</span>
                            <span className="font-bold text-gray-800">${cart.totalPrice.toFixed(2)}</span>
                        </div>
                        <p className="text-xs text-gray-500 mb-6 text-center">Shipping and taxes calculated at checkout.</p>
                        
                        <button 
                            onClick={handleCheckout}
                            className="w-full py-4 bg-rose-600 hover:bg-rose-700 text-white rounded-2xl font-bold text-lg transition transform hover:-translate-y-1 hover:shadow-lg flex items-center justify-center gap-2"
                        >
                            Proceed to Checkout <FaArrowRight />
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CartDrawer;
