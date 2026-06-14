// import React from "react";  


// const Register = ({ openLogin }) => {
//     return (
//         <div>
//             <h2>Register</h2>
//             <form>
//                 <div>
//                     <label>Name</label>
//                     <input type="text" />
//                 </div>

//                 <div>
//                     <label>Password:</label>
//                     <input type="password" />
//                 </div>
//                 <div>
//                     <button>Register</button>
//                 </div>
//             </form>
//             <div>
//                 <span>Already have an account?</span>
//                 <button onClick={openLogin}>Sign In</button>
//             </div>

//         </div>
//     )
// }
// export default Register
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../redux/authSlice";

const Register = ({ openLogin, closeModal }) => {
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister = async () => {
        if (!name || !email || !password) {
            alert("Please fill all fields");
            return;
        }

        try {
            const response = await fetch("http://localhost:8080/api/auth/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, password })
            });

            const data = await response.json();
            if (response.ok && data.success) {
                dispatch(loginSuccess({ id: data.userId, name: data.name }));
                alert("Registration successful! Welcome " + data.name);
                if (closeModal) closeModal();
            } else {
                alert(data.message || "Registration failed");
            }
        } catch (error) {
            console.error("Registration error:", error);
            alert("Backend is not reachable.");
        }
    };

    return (
        <div className="space-y-4">
            <h2 className="text-xl font-bold text-center">Register</h2>

            <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} className="w-full border p-2" />
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full border p-2" />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full border p-2" />

            <button onClick={handleRegister} className="w-full bg-black text-white p-2">
                Register
            </button>

            <p className="text-center">
                Already have an account?
                <button onClick={openLogin} className="text-blue-500 ml-2">
                    Login
                </button>
            </p>
        </div>
    );
};

export default Register;