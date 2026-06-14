// import React from "react";
// import { FaStar } from "react-icons/fa";
// import { addToCart } from "../redux/cartSlice";
// import { useDispatch, useSelector } from "react-redux";

// const ProductCard = ({ product }) => {
//     const dispatch = useDispatch();
//     const handleAddToCart = (e, product) => {
//         e.stopPropagation()
//         e.preventDefault()
//         dispatch(addToCart(product))
//         // alert(`${product.name} added to cart!`);
//         alert("Product Added Successfully!")

//     };
//     return (
//         <div className="bg-white p-4 rounded-lg relative border transition-transform duration-300 hover:scale-105 cursor-pointer">   
//             <img src={product.image} alt="" className="w-full h-48 object-cover mb-4" />
//             <h3 className="text-lg font-semibold">{product.name}</h3>
//             <p className="text-gray-500">${product.price}</p>
//             <div>
//                 <FaStar className="text-yellow-500" />
//                 <FaStar className="text-yellow-500" />
//                 <FaStar className="text-yellow-500" />  
//                 <FaStar className="text-yellow-500" />
//             </div>
//             <div className="absolute bottom-4 right-2 flex items-center justify-center w-8 h-8 bg-red-600 group text-white text-sm rounded-full hover:w-32 hover:bg-red-700 transition-all"
//                 onClick={(e) => handleAddToCart(e, product)}>
//                 <span class="group-hover:hidden">+</span>
//                 <span class="hidden group-hover:block">Add to Cart</span>
//             </div>
//         </div>
//     );
// };

// export default ProductCard;

// import React from "react";
// import { FaStar } from "react-icons/fa";
// import { addToCart } from "../redux/cartSlice";
// import { useDispatch, useSelector } from "react-redux";

// const ProductCard = ({ product }) => {
//     const dispatch = useDispatch();
//     const handleAddToCart = (e, product) => {
//         e.stopPropagation()
//         e.preventDefault()
//         dispatch(addToCart(product))
//         alert("Product Added Successfully!")
//     };
//     return (
//         <div className="bg-white p-4 rounded-lg relative border transition-transform duration-300 hover:scale-105 cursor-pointer">   
//             <img src={product.image} alt="" className="w-full h-48 object-cover mb-4" />
//             <h3 className="text-lg font-semibold">{product.name}</h3>
//             <p className="text-gray-500">${product.price}</p>
//             <div>
//                 <FaStar className="text-yellow-500" />
//                 <FaStar className="text-yellow-500" />
//                 <FaStar className="text-yellow-500" />  
//                 <FaStar className="text-yellow-500" />
//             </div>
//             <div className="absolute bottom-4 right-2 flex items-center justify-center w-8 h-8 bg-red-600 group text-white text-sm rounded-full hover:w-32 hover:bg-red-700 transition-all"
//                 onClick={(e) => handleAddToCart(e, product)}>
//                 <span className="group-hover:hidden">+</span>
//                 <span className="hidden group-hover:block">Add to Cart</span>
//             </div>
//         </div>
//     );
// };

// export default ProductCard;

import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { addToCart } from "../redux/cartSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
    const dispatch = useDispatch();
    const [showToast, setShowToast] = useState(false);

    const handleAddToCart = (e, product) => {
        e.stopPropagation();
        e.preventDefault();
        dispatch(addToCart(product));
        
        setShowToast(true);
        
        setTimeout(() => {
            setShowToast(false);
        }, 2500);
    };

    return (
        <>
            <Link to={`/product/${product.id}`} className="block">
                <div className="bg-white/80 backdrop-blur-2xl border border-white/60 shadow-sm p-4 rounded-3xl relative transition-all duration-300 hover:scale-105 cursor-pointer">   
                    
                    <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-full h-48 object-cover mb-4 rounded-xl" 
                    />
                    
                    <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
                    <p className="text-xl font-bold text-rose-600 mt-1">${product.price?.toFixed(2)}</p>
                    
                    <div className="flex mt-2">
                        <FaStar className="text-yellow-500" />
                        <FaStar className="text-yellow-500" />
                        <FaStar className="text-yellow-500" />  
                        <FaStar className="text-yellow-500" />
                        <FaStar className="text-yellow-500" />
                    </div>

                    <div 
                        className="absolute bottom-4 right-2 flex items-center justify-center w-8 h-8 bg-red-600 group text-white text-sm rounded-full hover:w-32 hover:bg-red-700 transition-all z-10"
                        onClick={(e) => handleAddToCart(e, product)}
                    >
                        <span className="group-hover:hidden">+</span>
                        <span className="hidden group-hover:block">Add to Cart</span>
                    </div>
                </div>
            </Link>

            {showToast && (
                <div className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] animate-fade-in">
                    <div className="bg-green-500 backdrop-blur-2xl text-white text-base font-medium px-8 py-4 rounded-3xl shadow-2xl flex items-center gap-3 border border-white/10">
                        <span className="text-green-400 text-2xl">✓</span>
                        Product Added Successfully!
                    </div>
                </div>
            )}
        </>
    );
};

export default ProductCard;