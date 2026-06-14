import React, { useState, useMemo } from 'react';
import ProductCard from '../components/ProductCard';
import { useSelector } from 'react-redux';
import { FaFilter, FaSearch } from 'react-icons/fa';
import { Categories } from './Home';

const Shop = () => {
    const products = useSelector(state => state.product.products || []);
    const [search, setSearch] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [priceRange, setPriceRange] = useState(1000);

    const filteredProducts = useMemo(() => {
        return products.filter(product => {
            const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase());
            const matchesCategory = selectedCategory === 'All' || product.category?.name === selectedCategory || (selectedCategory === 'Shoes' && !product.category); // Fallback for mock data
            const matchesPrice = product.price <= priceRange;
            return matchesSearch && matchesCategory && matchesPrice;
        });
    }, [products, search, selectedCategory, priceRange]);

    return (
        <div className="container mx-auto py-12 px-4 md:px-16 lg:px-24 flex flex-col md:flex-row gap-8">
            {/* Sidebar Filter */}
            <div className="w-full md:w-1/4">
                <div className="bg-white/80 backdrop-blur-2xl border border-white/60 shadow-sm p-6 rounded-3xl sticky top-24">
                    <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                        <FaFilter className="text-rose-600" /> Filters
                    </h3>

                    {/* Search */}
                    <div className="mb-6">
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Search</label>
                        <div className="relative">
                            <input 
                                type="text" 
                                placeholder="Find products..." 
                                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-500"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                            <FaSearch className="absolute left-3 top-3 text-gray-400" />
                        </div>
                    </div>

                    {/* Categories */}
                    <div className="mb-6">
                        <label className="block text-sm font-semibold text-gray-700 mb-3">Categories</label>
                        <div className="space-y-2">
                            <label className="flex items-center gap-3 cursor-pointer">
                                <input type="radio" name="category" className="accent-rose-600 w-4 h-4" checked={selectedCategory === 'All'} onChange={() => setSelectedCategory('All')} />
                                <span className={selectedCategory === 'All' ? 'font-medium text-rose-600' : 'text-gray-600'}>All Products</span>
                            </label>
                            {Categories.map(cat => (
                                <label key={cat} className="flex items-center gap-3 cursor-pointer">
                                    <input type="radio" name="category" className="accent-rose-600 w-4 h-4" checked={selectedCategory === cat} onChange={() => setSelectedCategory(cat)} />
                                    <span className={selectedCategory === cat ? 'font-medium text-rose-600' : 'text-gray-600'}>{cat}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Price Range */}
                    <div className="mb-6">
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Max Price: <span className="text-rose-600">${priceRange}</span>
                        </label>
                        <input 
                            type="range" 
                            min="0" 
                            max="1000" 
                            className="w-full accent-rose-600" 
                            value={priceRange}
                            onChange={(e) => setPriceRange(Number(e.target.value))}
                        />
                        <div className="flex justify-between text-xs text-gray-500 mt-1">
                            <span>$0</span>
                            <span>$1000</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Product Grid */}
            <div className="w-full md:w-3/4">
                <div className="mb-6 flex justify-between items-center">
                    <h2 className="text-3xl font-bold text-gray-800">Our Collection</h2>
                    <span className="text-gray-500 font-medium">{filteredProducts.length} Results</span>
                </div>
                
                {filteredProducts.length === 0 ? (
                    <div className="bg-white p-12 rounded-3xl text-center shadow-sm border border-gray-100">
                        <h3 className="text-xl font-bold text-gray-800 mb-2">No Products Found</h3>
                        <p className="text-gray-500">Try adjusting your filters or search term.</p>
                        <button onClick={() => { setSearch(''); setSelectedCategory('All'); setPriceRange(1000); }} className="mt-4 text-rose-600 hover:underline">
                            Clear all filters
                        </button>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredProducts.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Shop;


