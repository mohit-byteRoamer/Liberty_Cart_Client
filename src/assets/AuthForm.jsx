// import React, { useState } from "react";
// import { Input, Button } from "antd";
// import { useForm } from "react-hook-form";

// const AuthForm = () => {
//   const [isSignup, setIsSignup] = useState(false);

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     getValues,
//   } = useForm();

//   const handleSignupClick = () => {
//     setIsSignup(true);
//   };

//   const handleLoginClick = () => {
//     setIsSignup(false);
//   };

//   const onSubmitLogin = (data) => {
//     console.log("Login Data: ", data);
//   };

//   const onSubmitSignup = (data) => {
//     console.log("Signup Data: ", data);
//   };

//   return (
//     <div className="grid h-screen place-items-center bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600">
//       <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md w-full">
//         {/* Title Text */}
//         <div className="title-text flex justify-center items-center mb-6">
//           <h2 className="text-2xl font-semibold">
//             {isSignup ? "Signup Form" : "Login Form"}
//           </h2>
//         </div>

//         {/* Slide Controls */}
//         <div className="relative mb-6">
//           <div className="flex justify-between rounded-full overflow-hidden border border-gray-300">
//             <button
//               onClick={handleLoginClick}
//               className={`w-1/2 py-2 font-semibold ${
//                 !isSignup ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white" : "bg-white"
//               } transition-colors duration-300`}
//             >
//               Login
//             </button>
//             <button
//               onClick={handleSignupClick}
//               className={`w-1/2 py-2 font-semibold ${
//                 isSignup ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white" : "bg-white"
//               } transition-colors duration-300`}
//             >
//               Signup
//             </button>
//           </div>
//         </div>

//         {/* Form */}
//         <div className="form-inner">
//           {!isSignup ? (
//             // Login Form
//             <form onSubmit={handleSubmit(onSubmitLogin)}>
//               <div className="mb-4">
//                 <Input
//                   type="text"
//                   placeholder="Email Address"
//                   {...register("loginEmail", {
//                     required: "Email is required",
//                     pattern: {
//                       value: /^\S+@\S+$/i,
//                       message: "Enter a valid email address",
//                     },
//                   })}
//                   className={`h-12 w-full p-3 rounded-lg border ${
//                     errors.loginEmail ? "border-red-500" : "border-gray-300"
//                   } focus:border-blue-600 outline-none`}
//                 />
//                 {errors.loginEmail && (
//                   <p className="text-red-500 text-sm">{errors.loginEmail.message}</p>
//                 )}
//               </div>

//               <div className="mb-4">
//                 <Input.Password
//                   placeholder="Password"
//                   {...register("loginPassword", {
//                     required: "Password is required",
//                   })}
//                   className={`h-12 w-full p-3 rounded-lg border ${
//                     errors.loginPassword ? "border-red-500" : "border-gray-300"
//                   } focus:border-blue-600 outline-none`}
//                 />
//                 {errors.loginPassword && (
//                   <p className="text-red-500 text-sm">{errors.loginPassword.message}</p>
//                 )}
//               </div>

//               <div className="flex justify-between items-center mb-6">
//                 <a href="#" className="text-blue-600 hover:underline">
//                   Forgot password?
//                 </a>
//               </div>

//               <Button
//                 htmlType="submit"
//                 className="w-full h-12 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg"
//               >
//                 Login
//               </Button>

//               <div className="text-center mt-6">
//                 Not a member?{" "}
//                 <a
//                   href="#"
//                   onClick={(e) => {
//                     e.preventDefault();
//                     handleSignupClick();
//                   }}
//                   className="text-blue-600 hover:underline"
//                 >
//                   Signup now
//                 </a>
//               </div>
//             </form>
//           ) : (
//             // Signup Form
//             <form onSubmit={handleSubmit(onSubmitSignup)}>
//               <div className="mb-4">
//                 <Input
//                   type="text"
//                   placeholder="Email Address"
//                   {...register("signupEmail", {
//                     required: "Email is required",
//                     pattern: {
//                       value: /^\S+@\S+$/i,
//                       message: "Enter a valid email address",
//                     },
//                   })}
//                   className={`h-12 w-full p-3 rounded-lg border ${
//                     errors.signupEmail ? "border-red-500" : "border-gray-300"
//                   } focus:border-blue-600 outline-none`}
//                 />
//                 {errors.signupEmail && (
//                   <p className="text-red-500 text-sm">{errors.signupEmail.message}</p>
//                 )}
//               </div>

//               <div className="mb-4">
//                 <Input.Password
//                   placeholder="Password"
//                   {...register("signupPassword", {
//                     required: "Password is required",
//                   })}
//                   className={`h-12 w-full p-3 rounded-lg border ${
//                     errors.signupPassword ? "border-red-500" : "border-gray-300"
//                   } focus:border-blue-600 outline-none`}
//                 />
//                 {errors.signupPassword && (
//                   <p className="text-red-500 text-sm">{errors.signupPassword.message}</p>
//                 )}
//               </div>

//               <div className="mb-4">
//                 <Input.Password
//                   placeholder="Confirm Password"
//                   {...register("confirmPassword", {
//                     required: "Please confirm your password",
//                     validate: (value) =>
//                       value === getValues("signupPassword") ||
//                       "Passwords do not match",
//                   })}
//                   className={`h-12 w-full p-3 rounded-lg border ${
//                     errors.confirmPassword ? "border-red-500" : "border-gray-300"
//                   } focus:border-blue-600 outline-none`}
//                 />
//                 {errors.confirmPassword && (
//                   <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>
//                 )}
//               </div>

//               <Button
//                 htmlType="submit"
//                 className="w-full h-12 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg"
//               >
//                 Signup
//               </Button>
//             </form>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AuthForm;
