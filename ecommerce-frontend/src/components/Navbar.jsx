
import React, { useState } from "react";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Modal from "./Modal";
import Login from "./Login";
import Register from "./Register";
import { setSearchItem } from "../redux/productSlice";
// import { clearCart } from "../redux/cartSlice";

const Navbar = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isLoginMode, setIsLoginMode] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const products = useSelector((state) => state.cart?.products || state.product?.products || []);

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchTerm.trim()) {
            dispatch(setSearchItem(searchTerm));
            navigate("/filtered-data");
        }
    };

    const openLogin = () => {
        setIsLoginMode(true);
        setIsModalOpen(true);
    };

    const openSignUp = () => {
        setIsLoginMode(false);
        setIsModalOpen(true);
    };

    return (
        <nav className="sticky top-0 z-50">
           
            <div className="bg-white/80 backdrop-blur-xl border-b border-white/50 shadow-sm">
                <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                    <Link to="/" className="text-2xl font-bold text-red-600">
                        EShop
                    </Link>
                    <form onSubmit={handleSearch} className="relative flex-1 max-w-xl mx-8">
                        <input
                            type="text"
                            placeholder="Search products..."
                            className="w-full bg-white/70 backdrop-blur-md border border-gray-200 focus:border-red-500 rounded-2xl py-3 px-5 pr-12 outline-none transition"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <button type="submit">
                            <FaSearch className="absolute top-3.5 right-5 text-gray-500 hover:text-red-500 transition cursor-pointer" />
                        </button>
                    </form>

                    <div className="flex items-center gap-6">
                        <Link to="/cart" className="relative">
                            <FaShoppingCart className="text-2xl text-gray-700 hover:text-red-600 transition" />
                            {products.length > 0 && (
                                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                                    {products.length}
                                </span>
                            )}
                        </Link>

                        <button
                            onClick={openLogin}
                            className="hidden md:block px-5 py-2 font-medium text-gray-700 hover:text-red-600 transition"
                        >
                            Login | Register
                        </button>

                        <button
                            onClick={openLogin}
                            className="md:hidden text-2xl text-gray-700"
                        >
                            <FaUser />
                        </button>
                    </div>
                </div>
            </div>

            <div className="bg-white/80 backdrop-blur-xl border-b border-white/50">

                <div className="container mx-auto px-4 py-3 flex items-center justify-center gap-10 text-sm font-semibold text-gray-700">
                    <Link to="/" className="hover:text-red-600 transition">HOME</Link>
                    <Link to="/shop" className="hover:text-red-600 transition">SHOP</Link>
                    <Link to="/contact" className="hover:text-red-600 transition">CONTACT</Link>
                    <Link to="/about" className="hover:text-red-600 transition">ABOUT</Link>
                </div>
            </div>

           
            <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
                {isLoginMode ? 
                (
                    <Login openSignUp={openSignUp} />
                ) : 
                (
                    <Register openLogin={openLogin} />
                )}
            </Modal>
        </nav>
    );
};

export default Navbar;