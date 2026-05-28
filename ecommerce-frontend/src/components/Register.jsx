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
import React from "react";

const Register = ({ openLogin }) => {
    return (
        <div className="space-y-4">
            <h2 className="text-xl font-bold text-center">Register</h2>

            <input type="text" placeholder="Name" className="w-full border p-2" />
            <input type="email" placeholder="Email" className="w-full border p-2" />
            <input type="password" placeholder="Password" className="w-full border p-2" />

            <button className="w-full bg-black text-white p-2">
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