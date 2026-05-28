import React, { useState } from "react";

const ChangeAddress = ({ currentAddress, onSave, onCancel }) => {
    const [newAddress, setNewAddress] = useState(currentAddress);

    return (
        <div>
            <h2 className="text-lg font-semibold mb-4">Change Shipping Address</h2>
            <input
                type="text"
                value={newAddress}
                onChange={(e) => setNewAddress(e.target.value)}
                placeholder="Enter new address"
                className="border p-2 w-full mb-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <div className="flex justify-end">
                <button
                    onClick={onCancel}
                    className="bg-gray-300 text-gray-700 px-4 py-2 rounded mr-2 hover:bg-gray-400"
                >
                    Cancel
                </button>
                <button
                    onClick={() => onSave(newAddress)}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    Save Address
                </button>
            </div>
        </div>
    );
};

export default ChangeAddress;