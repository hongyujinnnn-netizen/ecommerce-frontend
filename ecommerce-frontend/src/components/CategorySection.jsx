import React from "react";
import ManCategory from "../assets/Images/men.jpg";
import WomanCategory from "../assets/Images/women.jpg";
import KidsCategory from "../assets/Images/kids.jpg";

const Categories = [
    {
        title: "Men",
        imageUrl: ManCategory,
    },
    {
        title: "Women",
        imageUrl: WomanCategory,
    },
    {
        title: "Kids",
        imageUrl: KidsCategory,
    }
];

const CategorySection = () => {
    return (
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 py-8">
            {Categories.map((category, index) => (
                <div
                
                    key={index}
                    className="relative h-64 rounded-3xl overflow-hidden shadow-sm group cursor-pointer"
                >
                    <img
                        src={category.imageUrl}
                        alt={category.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />

            
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    
                 
                    <div className="absolute bottom-6 left-6 bg-white/80 backdrop-blur-2xl border border-white/60 rounded-2xl px-6 py-4 shadow-sm">
                        <p className="text-2xl font-bold text-gray-900">{category.title}</p>
                        <p className="text-gray-700 font-medium">Shop Now →</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CategorySection;