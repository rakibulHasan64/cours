import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { LockClosedIcon } from "@heroicons/react/20/solid";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa"; 
import { AutContext } from "../../context";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth"; // Import missing functions
import { auth } from "../../componet/auth/firevase.config";


function Login() {

   const { singin } = useContext(AutContext);
   const navgite = useNavigate();

   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm();
   const [showPassword, setShowPassword] = useState(false); 

   const onSubmit = (data) => {
      singin(data.email, data.password)
         .then((reslt) => {
            console.log(reslt);
            navgite("/");
           
         }).catch((error) => {
         console.log(error.message);
         
         })
   
      
   };

   const googleSignIn = () => {
      const provider = new GoogleAuthProvider();
      return signInWithPopup(auth, provider); 
   };



   const handlerGoogle = () => {
      googleSignIn()
         .then((result) => {
            console.log("Google sign-in success", result);
            navgite("/");
         })
         .catch((error) => {
            console.error("Google sign-in error:", error.message);
         });
      
   }

   return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100/56 to-purple-200">
         <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md">
            <div className="flex items-center justify-center mb-6">
               <LockClosedIcon className="h-8 w-8 text-blue-600" />
               <h2 className="ml-2 text-2xl font-bold text-gray-800">Secure Login</h2>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
               <div>
                  <label className="block text-gray-600 mb-1">Email</label>
                  <input
                     type="email"
                     {...register("email", { required: "Email is required" })}
                     className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
                  />
                  {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
               </div>

               <div>
                  <label className="block text-gray-600 mb-1">Password</label>
                  <div className="relative">
                     <input
                        type={showPassword ? "text" : "password"} 
                        {...register("password", { required: "Password is required" })}
                        className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
                     />
                     <div
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                     >
                        {showPassword ? (
                           <FaEyeSlash className="h-5 w-5 text-gray-500" />
                        ) : (
                           <FaEye className="h-5 w-5 text-gray-500" />
                        )}
                     </div>
                  </div>
                  {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
               </div>

               <button
                  type="submit"
                  className="w-full py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
               >
                  Login
               </button>

               
            </form>
            <button
               onClick={handlerGoogle}
               className="w-full py-2 mt-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
            >
               Continue with Google
            </button>

            <Link to={'/register'}>
               <p className="mt-4 text-center text-sm text-gray-500">
                  Don't have an account? <span className="text-blue-600 font-semibold cursor-pointer">Sign Up</span>
               </p>
            </Link>
         </div>
      </div>
   );
}

export default Login;