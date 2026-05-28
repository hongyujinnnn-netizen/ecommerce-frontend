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

import React from "react";

const Login = ({ openSignUp }) => {
    return (
        <div className="space-y-4">
            <h2 className="text-xl font-bold text-center">Login</h2>

            <input type="email" placeholder="Email" className="w-full border p-2" />
            <input type="password" placeholder="Password" className="w-full border p-2" />

            <button className="w-full bg-black text-white p-2">
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