import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import { FaStar, FaShoppingCart, FaArrowLeft } from 'react-icons/fa';

const ProductDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [showToast, setShowToast] = useState(false);

    useEffect(() => {
        // Fetch the specific product from the backend
        // For now, simulating fetch from API since we don't have a GET /api/products/{id} mapped in the backend yet,
        // Wait, we can fetch all and find, or just call the backend if we add the endpoint.
        // Let's assume we can fetch all and find it for simplicity, or we can fetch a specific one.
        fetch('http://localhost:8080/api/products/all')
            .then(res => res.json())
            .then(data => {
                const found = data.find(p => String(p.id) === String(id));
                setProduct(found);
                setLoading(false);
            })
            .catch(err => {
                console.error("Failed to fetch product details", err);
                setLoading(false);
            });
    }, [id]);

    const handleAddToCart = () => {
        if (product) {
            dispatch(addToCart(product));
            setShowToast(true);
            setTimeout(() => setShowToast(false), 2500);
        }
    };

    if (loading) {
        return <div className="container mx-auto py-16 text-center text-xl text-gray-500">Loading Product Details...</div>;
    }

    if (!product) {
        return (
            <div className="container mx-auto py-16 text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Product Not Found</h2>
                <button onClick={() => navigate('/shop')} className="text-rose-600 hover:underline flex items-center justify-center gap-2 mx-auto">
                    <FaArrowLeft /> Back to Shop
                </button>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 md:px-16 lg:px-24 py-12">
            <button onClick={() => navigate(-1)} className="mb-8 flex items-center text-gray-500 hover:text-rose-600 transition">
                <FaArrowLeft className="mr-2" /> Back
            </button>
            
            <div className="flex flex-col md:flex-row gap-12">
                {/* Product Image */}
                <div className="w-full md:w-1/2">
                    <div className="bg-white p-4 rounded-3xl shadow-sm border border-gray-100">
                        <img 
                            src={product.image} 
                            alt={product.name} 
                            className="w-full h-[500px] object-cover rounded-2xl"
                        />
                    </div>
                </div>

                {/* Product Details */}
                <div className="w-full md:w-1/2 flex flex-col justify-center">
                    <div className="bg-rose-100 text-rose-700 text-xs font-bold px-3 py-1 rounded-full w-max mb-4 uppercase tracking-wide">
                        {product.category?.name || 'Category'}
                    </div>
                    
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">{product.name}</h1>
                    
                    <div className="flex items-center mb-6">
                        <div className="flex text-yellow-500 text-lg mr-3">
                            <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                        </div>
                        <span className="text-gray-500">(124 Reviews)</span>
                    </div>

                    <p className="text-3xl font-bold text-rose-600 mb-6">${product.price?.toFixed(2)}</p>

                    <p className="text-gray-600 mb-8 leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>

                    <div className="flex items-center gap-4 mb-8">
                        <div className="flex items-center border border-gray-300 rounded-xl overflow-hidden">
                            <button className="px-4 py-3 bg-gray-50 hover:bg-gray-100 text-gray-600 font-bold transition">-</button>
                            <span className="px-6 py-3 font-semibold text-gray-800 border-x border-gray-300">1</span>
                            <button className="px-4 py-3 bg-gray-50 hover:bg-gray-100 text-gray-600 font-bold transition">+</button>
                        </div>
                        
                        <div className="text-sm text-green-600 font-medium">
                            {product.stock > 0 ? `In Stock (${product.stock} available)` : 'In Stock'}
                        </div>
                    </div>

                    <button 
                        onClick={handleAddToCart}
                        className="bg-rose-600 hover:bg-rose-700 text-white font-bold py-4 px-8 rounded-2xl transition transform hover:-translate-y-1 hover:shadow-lg flex items-center justify-center gap-3 text-lg"
                    >
                        <FaShoppingCart /> Add to Cart
                    </button>
                </div>
            </div>

            {showToast && (
                <div className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] animate-fade-in">
                    <div className="bg-green-500 backdrop-blur-2xl text-white text-base font-medium px-8 py-4 rounded-3xl shadow-2xl flex items-center gap-3 border border-white/10">
                        <span className="text-green-400 text-2xl">✓</span>
                        Product Added Successfully!
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductDetail;
