// import React from "react";
// import { useSelector } from "react-redux";
// import ProductCard from "../components/ProductCard";
// import NotFount from "./Images/notfount.jpg";


// const FilterData = () => {
//     const filteredProducts  = useSelector(state => state.product.filteredData);
//     return (
//         <div>
//                  <div className="mx-auto py-12 px-4 md:px-16 lg:px-24">
//                     {filteredProducts.length > 0 ? 
//                     <>
//                 <h2 className="text-2xl font-bold mb-6 text-center">Shop</h2>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//                     {/* {filteredProducts.map((product) => (
//                         <ProductCard product={product}/>
//                     ))} */}
//                     {filteredProducts.map((product) => (
//     <ProductCard key={product.id} product={product} />
// ))}
//                 </div>
//                 </>
//                 :
//                 <div className="flex items-center"> 
//                 <img src="{}" alt="" />


                
//                 <p className="text-gray-500 ml-4">No products found</p>
//                 </div>
// }
//             </div>

//         </div>
//     )
// }

// export default FilterData;


import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import { FaSearch } from "react-icons/fa";

const FilterData = () => {
    const filteredProducts = useSelector(state => state.product.filteredData);

    return (
        <div>
            <div className="mx-auto py-12 px-4 md:px-16 lg:px-24">
                {filteredProducts.length > 0 ? 
                <>
                    <h2 className="text-2xl font-bold mb-6 text-center">Shop</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {filteredProducts.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </>
                :
                <div className="flex flex-col items-center justify-center py-20 text-center">
                   
                    <div className="relative w-32 h-32 mx-auto mb-8">
                        <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 rounded-3xl shadow-2xl transform rotate-6"></div>
                        <div className="absolute inset-0 bg-white rounded-3xl shadow-xl flex items-center justify-center">
                            <FaSearch className="text-7xl text-gray-400 drop-shadow-2xl" />
                        </div>
                    </div>

                    <h3 className="text-3xl font-semibold text-gray-800 mb-2">
                        No Products Found
                    </h3>
                    <p className="text-gray-600 text-lg max-w-sm">
                        Sorry, we couldn't find any products matching your search.
                    </p>
                    
                    <button 
                        onClick={() => window.history.back()}
                        className="mt-8 bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-medium transition"
                    >
                        Go Back
                    </button>
                </div>
                }
            </div>
        </div>
    )
}

export default FilterData;