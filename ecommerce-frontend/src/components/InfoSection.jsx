import React from "react";
import { FaShippingFast, FaHeadset, FaMoneyBillWave, FaLock, FaTag} from "react-icons/fa";

const InfoSection = () => {
    const infoItems = [
        {
            icon: <FaShippingFast className="text-3xl text-rose-600" />,
            title: "Free Shipping",
            description: "Enjoy free shipping on all orders over $50.",
        },
        {
            icon: <FaHeadset className="text-3xl text-rose-600" />,
            title: "24/7 Support",
            description: "Our support team is here to help you anytime.",
        },
        {
            icon: <FaMoneyBillWave className="text-3xl text-rose-600" />,
            title: "100% Money Back",
            description: "Not satisfied with your purchase? Get a full refund.",
        },
        {
            icon: <FaLock className="text-3xl text-rose-600" />,
            title: "Secure Payment",
            description: "Your payment information is processed securely.",
        },
        {
            icon: <FaTag className="text-3xl text-rose-600" />,
            title: "Best Prices",
            description: "We offer competitive prices on all products.",
        },
    ];

    return (
        <div className="py-12">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                {infoItems.map((item, index) => (
                    <div 
                        key={index} 
                        className="bg-white/80 backdrop-blur-2xl border border-white/60 shadow-sm rounded-3xl p-8 flex flex-col items-center text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                    >
                        <div className="mb-6">
                            {item.icon}
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-3">
                            {item.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default InfoSection;