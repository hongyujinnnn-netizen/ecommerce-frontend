import React from "react";
import { FaFacebook, FaInstagram, FaTelegram, FaTiktok } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="relative bg-black/70 backdrop-blur-2xl border-t border-white/10 py-8 px-4 md:px-16 lg:px-24 text-white">
            {/* Subtle gradient overlay for iOS-like depth */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none"></div>
            
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
               
                <div>
                    <h3 className="text-2xl font-semibold tracking-tight">EShop</h3>
                    <p className="mt-4 text-gray-300 text-[15px] leading-relaxed">
                        Your one-stop shop for all your shopping needs.
                        We offer a wide range of products at competitive prices, ensuring you get the best value for your money.
                        Shop with us and experience the convenience of online shopping like never before.
                    </p>
                </div>

            
                <div className="flex flex-col md:items-center">
                    <h4 className="text-lg font-semibold tracking-tight">Quick Links</h4>
                    <ul className="mt-4 space-y-2 text-gray-300">
                        <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
                        <li><Link to="/shop" className="hover:text-white transition-colors">Shop</Link></li>
                        <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
                        <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                    </ul>
                </div>

            
                <div>
                    <h4 className="text-lg font-semibold tracking-tight">Follow Us</h4>
                    <div className="flex space-x-5 mt-5">
                        <a href="#" className="hover:text-white/80 transition-all hover:scale-110"><FaFacebook size={22} /></a>
                        <a href="https://t.me/sinath67" className="hover:text-white/80 transition-all hover:scale-110"><FaTelegram size={22} /></a>
                        <a href="https://www.tiktok.com/@_s_i_n_a_th?_r=1&_t=ZS-967hQg44yoS" className="hover:text-white/80 transition-all hover:scale-110"><FaTiktok size={22} /></a>
                        <a href="#" className="hover:text-white/80 transition-all hover:scale-110"><FaInstagram size={22} /></a>
                    </div>

                    <form className="mt-8">
                        <div className="flex items-center bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl overflow-hidden focus-within:border-white/40 transition-all">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 bg-transparent px-5 py-3.5 text-sm focus:outline-none placeholder:text-gray-400"
                            />
                            <button 
                                type="submit" 
                                className="bg-white text-black font-medium px-6 py-3.5 hover:bg-gray-200 transition-colors"
                            >
                                Subscribe
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            
            <div className="mt-10 border-t border-white/10 pt-6">
                <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
                    <p>&copy; 2026 EShop. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;