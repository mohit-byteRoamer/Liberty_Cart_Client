import { Button, Input } from "antd";
import "tailwindcss/tailwind.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const Signup = () => {
   const [clientReady, setClientReady] = useState(false);

   useEffect(() => {
      setClientReady(true);
   }, []);

   // Initialize react-hook-form
   const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
   } = useForm();

   const onSubmit = (data) => {
      console.log("Form data:", data);
   };

   // Watch the password field for comparison
   const password = watch("password");

   return (
      <div className="container max-w-full min-h-[79vh] flex items-center justify-center">
         <div className="w-96 h-[90%] rounded-lg shadow-lg border-2">
            <div className="p-5">
               <h2 className="text-3xl font-bold pb-4">Create an account</h2>
               <p className="mb-6">Enter your details below</p>

               {/* Use handleSubmit from react-hook-form */}
               <form onSubmit={handleSubmit(onSubmit)}>
                  {/* Full Name */}
                  <div className="mb-4">
                     <label className="block text-sm font-medium">Full Name</label>
                     <Input
                        {...register("fullName", {
                           required: "Please enter your full name",
                           minLength: {
                              value: 3,
                              message: "Full name must be at least 3 characters long",
                           },
                           pattern: {
                              value: /^[A-Za-z\s]+$/,
                              message: "Name can only contain letters",
                           },
                        })}
                        allowClear
                        placeholder="Full name"
                     />
                     {errors.fullName && (
                        <p className="text-red-600 text-sm">{errors.fullName.message}</p>
                     )}
                  </div>

                  {/* Email */}
                  <div className="mb-4">
                     <label className="block text-sm font-medium">Email address</label>
                     <Input
                        type="email"
                        placeholder="Email address"
                        allowClear
                        {...register("email", {
                           required: "Please enter your email",
                           pattern: {
                              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                              message: "Please enter a valid email",
                           },
                        })}
                     />
                     {errors.email && (
                        <p className="text-red-600 text-sm">{errors.email.message}</p>
                     )}
                  </div>

                  {/* Password */}
                  <div className="mb-4">
                     <label className="block text-sm font-medium">Password</label>
                     <Input.Password
                        placeholder="Password"
                        allowClear
                        {...register("password", {
                           required: "Please enter your password",
                           minLength: {
                              value: 6,
                              message: "Password should be at least 6 characters long",
                           },
                        })}
                     />
                     {errors.password && (
                        <p className="text-red-600 text-sm">{errors.password.message}</p>
                     )}
                  </div>

                  {/* Confirm Password */}
                  <div className="mb-4">
                     <label className="block text-sm font-medium">Confirm Password</label>
                     <Input.Password
                        {...register("confirmPassword", {
                           required: "Please confirm your password",
                           validate: (value) => value === password || "Passwords do not match",
                        })}
                        allowClear
                        placeholder="Confirm your password"
                     />
                     {errors.confirmPassword && (
                        <p className="text-red-600 text-sm">{errors.confirmPassword.message}</p>
                     )}
                  </div>

                  {/* Button */}
                  <div className="mb-4">
                     <Button
                        className="w-full"
                        type="primary"
                        htmlType="submit"
                        disabled={!clientReady}>
                        Create Account
                     </Button>
                  </div>
               </form>

               <div className="mt-4 text-center">
                  Already have an account?{" "}
                  <Link to="/login" className="text-blue-600">
                     Log in
                  </Link>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Signup;
