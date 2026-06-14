// import React from "react";


// const Login = ({ openSignUp }) => {
//     return (
//         <div>
//             <h2>Login</h2>
//             <form>
//                 <div>
//                     <label>Email:</label>
//                     <input type="email" />
//                 </div>

//                 <div>
//                     <label>Password:</label>
//                     <input type="password" />
//                 </div>
//                 <div>
//                     <label htmlFor="">
//                     <input type="checkbox" id="remember" />
//                     <span>Remember me</span>
//                     </label>
//                     <a href="">Forgot Password?</a>
//                 </div>
//                 <div>
//                     <button>Login</button>
//                 </div>
//             </form>
//             <div>
//                 <span>Don't have an account?</span>
//                 <button onClick={openSignUp}>Sign Up</button>
//             </div>

//         </div>
//     )
// }
// export default Login

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../redux/authSlice";

const Login = ({ openSignUp, closeModal }) => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
        if (!email || !password) {
            alert("Please fill all fields");
            return;
        }

        try {
            const response = await fetch("http://localhost:8080/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password })
            });

            const data = await response.json();
            if (response.ok && data.success) {
                dispatch(loginSuccess({ id: data.userId, name: data.name }));
                alert("Login successful! Welcome " + data.name);
                if (closeModal) closeModal();
            } else {
                alert(data.message || "Login failed");
            }
        } catch (error) {
            console.error("Login error:", error);
            alert("Backend is not reachable.");
        }
    };

    return (
        <div className="space-y-4">
            <h2 className="text-xl font-bold text-center">Login</h2>

            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full border p-2" />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full border p-2" />

            <button onClick={handleLogin} className="w-full bg-black text-white p-2">
                Login
            </button>

            <p className="text-center">
                Don’t have an account?
                <button onClick={openSignUp} className="text-blue-500 ml-2">
                    Sign Up
                </button>
            </p>
        </div>
    );
};

export default Login;