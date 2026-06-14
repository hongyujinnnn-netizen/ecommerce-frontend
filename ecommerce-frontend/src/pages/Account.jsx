import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaUser, FaBox, FaMapMarkerAlt, FaHeart, FaSignOutAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { logout } from '../redux/authSlice';

const Account = () => {
    const { user, isAuthenticated } = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('orders');

    if (!isAuthenticated) {
        return (
            <div className="container mx-auto py-20 text-center">
                <h2 className="text-3xl font-bold mb-4">Please log in</h2>
                <p className="text-gray-500 mb-8">You need to be logged in to view your account dashboard.</p>
                <button onClick={() => navigate('/')} className="bg-rose-600 text-white px-8 py-3 rounded-xl font-semibold">Go to Home</button>
            </div>
        );
    }

    const handleLogout = () => {
        dispatch(logout());
        navigate('/');
    };

    return (
        <div className="bg-gray-50 min-h-screen py-12">
            <div className="container mx-auto px-4 md:px-16 lg:px-24">
                
                {/* Header */}
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex items-center justify-between mb-8">
                    <div className="flex items-center gap-6">
                        <div className="w-20 h-20 bg-rose-100 text-rose-600 rounded-full flex items-center justify-center text-3xl font-bold">
                            {user?.name?.charAt(0).toUpperCase()}
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-gray-800">Hello, {user?.name}</h2>
                            <p className="text-gray-500">{user?.email}</p>
                        </div>
                    </div>
                    <button onClick={handleLogout} className="text-gray-500 hover:text-rose-600 flex items-center gap-2 font-medium transition">
                        <FaSignOutAlt /> Logout
                    </button>
                </div>

                <div className="flex flex-col md:flex-row gap-8">
                    {/* Sidebar Nav */}
                    <div className="w-full md:w-1/4">
                        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
                            <button 
                                onClick={() => setActiveTab('orders')}
                                className={`w-full text-left px-6 py-4 flex items-center gap-3 font-medium transition border-l-4 ${activeTab === 'orders' ? 'border-rose-600 text-rose-600 bg-rose-50' : 'border-transparent text-gray-600 hover:bg-gray-50'}`}
                            >
                                <FaBox /> Order History
                            </button>
                            <button 
                                onClick={() => setActiveTab('addresses')}
                                className={`w-full text-left px-6 py-4 flex items-center gap-3 font-medium transition border-l-4 ${activeTab === 'addresses' ? 'border-rose-600 text-rose-600 bg-rose-50' : 'border-transparent text-gray-600 hover:bg-gray-50'}`}
                            >
                                <FaMapMarkerAlt /> Saved Addresses
                            </button>
                            <button 
                                onClick={() => setActiveTab('wishlist')}
                                className={`w-full text-left px-6 py-4 flex items-center gap-3 font-medium transition border-l-4 ${activeTab === 'wishlist' ? 'border-rose-600 text-rose-600 bg-rose-50' : 'border-transparent text-gray-600 hover:bg-gray-50'}`}
                            >
                                <FaHeart /> Wishlist
                            </button>
                            <button 
                                onClick={() => setActiveTab('profile')}
                                className={`w-full text-left px-6 py-4 flex items-center gap-3 font-medium transition border-l-4 ${activeTab === 'profile' ? 'border-rose-600 text-rose-600 bg-rose-50' : 'border-transparent text-gray-600 hover:bg-gray-50'}`}
                            >
                                <FaUser /> Account Details
                            </button>
                        </div>
                    </div>

                    {/* Content Area */}
                    <div className="w-full md:w-3/4">
                        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 min-h-[400px]">
                            
                            {activeTab === 'orders' && (
                                <div className="animate-fade-in">
                                    <h3 className="text-xl font-bold text-gray-800 mb-6">Recent Orders</h3>
                                    
                                    <div className="border border-gray-100 rounded-2xl p-6 mb-4">
                                        <div className="flex flex-wrap justify-between items-center border-b border-gray-100 pb-4 mb-4">
                                            <div>
                                                <p className="text-sm text-gray-500 font-medium">Order #102934</p>
                                                <p className="text-sm text-gray-500">Placed on Oct 12, 2023</p>
                                            </div>
                                            <div className="text-right">
                                                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Delivered</span>
                                            </div>
                                        </div>
                                        <div className="flex gap-4">
                                            <div className="w-16 h-16 bg-gray-100 rounded-xl"></div>
                                            <div className="flex-1">
                                                <h4 className="font-semibold text-gray-800">Wireless Headphones</h4>
                                                <p className="text-gray-500 text-sm">Qty: 1</p>
                                            </div>
                                            <div className="font-bold text-gray-800">$120.00</div>
                                        </div>
                                    </div>

                                    <div className="border border-gray-100 rounded-2xl p-6">
                                        <div className="flex flex-wrap justify-between items-center border-b border-gray-100 pb-4 mb-4">
                                            <div>
                                                <p className="text-sm text-gray-500 font-medium">Order #102855</p>
                                                <p className="text-sm text-gray-500">Placed on Sep 05, 2023</p>
                                            </div>
                                            <div className="text-right">
                                                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Shipped</span>
                                            </div>
                                        </div>
                                        <div className="flex gap-4">
                                            <div className="w-16 h-16 bg-gray-100 rounded-xl"></div>
                                            <div className="flex-1">
                                                <h4 className="font-semibold text-gray-800">Mechanical Keyboard</h4>
                                                <p className="text-gray-500 text-sm">Qty: 2</p>
                                            </div>
                                            <div className="font-bold text-gray-800">$199.98</div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {activeTab === 'addresses' && (
                                <div className="animate-fade-in text-center py-12">
                                    <h3 className="text-xl font-bold text-gray-800 mb-2">Saved Addresses</h3>
                                    <p className="text-gray-500 mb-6">You have no saved addresses.</p>
                                    <button className="text-rose-600 font-semibold border border-rose-600 px-6 py-2 rounded-xl hover:bg-rose-50">Add New Address</button>
                                </div>
                            )}

                            {activeTab === 'wishlist' && (
                                <div className="animate-fade-in text-center py-12">
                                    <h3 className="text-xl font-bold text-gray-800 mb-2">Your Wishlist</h3>
                                    <p className="text-gray-500 mb-6">Your wishlist is currently empty.</p>
                                    <button onClick={() => navigate('/shop')} className="bg-gray-900 text-white font-semibold px-6 py-2 rounded-xl hover:bg-black">Explore Products</button>
                                </div>
                            )}

                            {activeTab === 'profile' && (
                                <div className="animate-fade-in">
                                    <h3 className="text-xl font-bold text-gray-800 mb-6">Account Details</h3>
                                    <div className="space-y-4 max-w-md">
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-1">Full Name</label>
                                            <input type="text" defaultValue={user?.name} className="w-full border border-gray-200 rounded-xl p-3 focus:ring-2 focus:ring-rose-500 focus:outline-none" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-1">Email Address</label>
                                            <input type="email" defaultValue={user?.email} className="w-full border border-gray-200 rounded-xl p-3 focus:ring-2 focus:ring-rose-500 focus:outline-none" />
                                        </div>
                                        <button className="mt-4 bg-rose-600 hover:bg-rose-700 text-white font-bold py-3 px-8 rounded-xl transition">Save Changes</button>
                                    </div>
                                </div>
                            )}

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Account;
