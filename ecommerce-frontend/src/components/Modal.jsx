import React from "react";

const Modal = ({ isModalOpen, setIsModalOpen, children }) => {
    if (!isModalOpen) return null;
    return (
        <div className="fixed inset-0 bg-gray-400 bg-opacity-30 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative">
                <button
                    className="absolute top-3 right-4 text-gray-500 hover:text-gray-700 text-xl"
                    onClick={() => setIsModalOpen(false)}
                >
                    &times;
                </button>
                {children}
            </div>
        </div>
    );
};

export default Modal;