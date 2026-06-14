// import React, { useEffect } from "react";
// import HeroImage from "../assets/Images/banner.jpg"; 
// import InfoSection from "../components/InfoSection";
// import CategorySection from "../components/CategorySection";
// import { setProducts } from "../redux/productSlice";
// import { useDispatch, useSelector } from "react-redux";
// import mockData, { Categories, Products } from "../assets/mockData"; // Import Categories directly
// import ProductCard from "../components/ProductCard";
// import Shop from "./Shop";

// const Home = () => {
//     const dispatch = useDispatch();
//     const products = useSelector((state) => state.product);
    
//     useEffect(() => {
//         dispatch(setProducts(mockData.Products));
//     }, []);

//     return (
//         <div>
//         <div className="bg-white mt-2 px-4 md:px-16 lg:px-24">
//             <div className="container mx-auto py-4 flex flex-col md:flex-row space-x-2">
//                 <div className="w-full md:w-3/12">
//                     <div className="bg-rose-600 text-white text-xs font-bold px-2 py-2.5">SHOP BY CATEGORY</div>
//                     <ul className="space-y-4 bg-gray-100 p-3 border">
//                         {Categories.map((category, index) => (
//                             <li key={index} className="flex items-center text-sm font-medium">
//                                 <div className="w-2 h-2 border border-red-500 rounded-full mr-2"></div>
//                                 {category}
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
//                 <div className="w-full md:w-9/12 mt-8 md:mt-0 h-96 relative">
//                     <img src={HeroImage} alt="" className="h-full w-full object-cover"/>
//                     <div className="absolute top-16 left-8">
//                         <p className="text-gray-600 mb-4">Code With Yousaf</p>
//                         <h2 className="text-3xl font-bold">WELCOME TO E-SHOP</h2>
//                         <p className="text-xl mt-2.5 font-bold text-gray-800">MILLIONS + PRODUCTS</p>
//                         <button className="bg-rose-600 px-8 py-1.5 text-white mt-4 hover:bg-rose-700 transform transition-transform duration-300 hover:scale-105">
//                             SHOP NOW
//                         </button>
//                     </div>
//                 </div>
//             </div>
//             <InfoSection />
//             <CategorySection />

//             <div className="container mx-auto py-12">
//                 <h2 className="text-2xl font-bold mb-6 text-center">Top Products</h2>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
//                     {products.products?.slice(0, 4).map((product) => (
//                         // <ProductCard key={product.id} product={product}/>
//                         <ProductCard product={product} />
                        
//                     ))}
//                 </div>
//             </div>
//         </div>
//         <Shop />
//         </div>
//     );
// };

// export default Home;

import React, { useEffect } from "react";
import HeroImage from "../assets/Images/banner3d.jpg"; 
import InfoSection from "../components/InfoSection";
import CategorySection from "../components/CategorySection";
import { setProducts } from "../redux/productSlice";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";

export const Categories = [
    "Electronics",
    "Fashion",
    "Home & Kitchen",
    "Beauty",
    "Sports",
    "Automotive",
    "IPhone",
];

const Home = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.product);
    
    useEffect(() => {
        fetch("http://localhost:8080/api/products")
            .then(res => {
                if (!res.ok) throw new Error("Network response was not ok");
                return res.json();
            })
            .then(data => {
                // The backend returns a paginated response, so the products are in data.content
                const productsArray = data.content ? data.content : data;
                dispatch(setProducts(productsArray));
            })
            .catch(err => {
                console.error("Failed to fetch products from database:", err);
                // We no longer fallback to mockData as requested
            });
    }, [dispatch]);

    return (
        <div>
            <div className="mx-auto px-4 md:px-16 lg:px-24 py-8">
                
              
                <div className="flex flex-col md:flex-row gap-6">
                    
                   
                    <div className="w-full md:w-3/12">
                        <div className="bg-white/80 backdrop-blur-2xl border border-white/60 shadow-sm rounded-3xl p-6">
                            <div className="bg-rose-600 text-white text-xs font-bold px-4 py-3 rounded-2xl mb-4">
                                SHOP BY CATEGORY
                            </div>
                            <ul className="space-y-4">
                                {Categories.map((category, index) => (
                                    <li key={index} className="flex items-center text-sm font-medium text-gray-700 hover:text-rose-600 transition">
                                        <div className="w-2 h-2 border border-rose-500 rounded-full mr-3"></div>
                                        {category}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                  
                    <div className="w-full md:w-9/12 h-96 relative rounded-3xl overflow-hidden">
                        <img src={HeroImage} alt="" className="h-full w-full object-cover"/>
                        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>
                        
                        <div className="absolute top-12 left-10">
                            <p className="text-gray-200 mb-2">Code With Yousaf</p>
                            <h2 className="text-4xl font-bold tracking-tight text-white">WELCOME TO E-SHOP</h2>
                            <p className="text-2xl mt-2 font-semibold text-gray-100">MILLIONS + PRODUCTS</p>
                            <button className="mt-6 bg-rose-600 hover:bg-rose-700 px-8 py-3 rounded-2xl text-white font-medium transition transform hover:scale-105">
                                SHOP NOW
                            </button>
                        </div>
                    </div>
                </div>

                <InfoSection />
                <CategorySection />

                {/* Top Products Section */}
                <div className="mt-16">
                    <h2 className="text-3xl font-bold mb-8 text-center">Top Products</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {products.products?.slice(0, 4).map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Home;