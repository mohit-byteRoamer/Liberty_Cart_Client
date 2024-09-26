import { Button, Input } from "antd";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { signUpActionsLoad } from "../redux/action/auth-actions";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import Image from "./Image";
import toast from "react-hot-toast";

const Signup = () => {
   const dispatch = useDispatch();
   const [clientReady, setClientReady] = useState(false);
   const signUpLoader = useSelector((state) => state.AuthReducer?.signUpLoader);

   // GET UPLOAD IMAGE_URL
   const imageURL = useSelector((state) => state.UploadFileReducer?.uploadFile);
   console.log("IMAGE_URL", imageURL);

   useEffect(() => {
      setClientReady(true);
   }, []);

   const {
      control,
      handleSubmit,
      formState: { errors },
   } = useForm();

   // SIGNUP DISPATCHER
   const onSubmit = (data) => {
      if (!imageURL) {
         toast.error("Image URL not available.");
         return;
      }
      dispatch(
         signUpActionsLoad({
            userName: data.fullName,
            email: data.email,
            password: data.password,
            avatar: imageURL,
            role: "user",
         })
      );
   };

   return (
      <>
         <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
            className="container flex items-center justify-center max-w-full min-h-[79vh]">
            <div className="w-96 h-[90%] rounded-lg shadow-lg border-2">
               <div className="p-5">
                  <h1 className="text-3xl font-bold pb-4">Create an account</h1>
                  <p className="mb-6">Enter your details below</p>

                  <form onSubmit={handleSubmit(onSubmit)}>
                     {/* FULL NAME */}
                     <div className="mb-4">
                        <label className="block text-sm font-medium">Full Name</label>
                        <Controller
                           name="fullName"
                           control={control}
                           rules={{
                              required: "Full name is required",
                              minLength: {
                                 value: 3,
                                 message: "Full name must be at least 3 characters long",
                              },
                              maxLength: {
                                 value: 50,
                                 message: "Full name cannot exceed 50 characters",
                              },
                              pattern: {
                                 value: /^[A-Za-z\s]+$/,
                                 message: "Full name can only contain letters and spaces",
                              },
                           }}
                           render={({ field }) => (
                              <Input {...field} allowClear placeholder="Full name" />
                           )}
                        />
                        {errors.fullName && (
                           <p className="text-red-600 text-sm">{errors.fullName.message}</p>
                        )}
                     </div>

                     {/* EMAIL ADDRESS */}
                     <div className="mb-4">
                        <label className="block text-sm font-medium">Email address</label>
                        <Controller
                           name="email"
                           control={control}
                           rules={{
                              required: "Email address is required",
                              pattern: {
                                 value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                 message: "Enter a valid email address",
                              },
                           }}
                           render={({ field }) => (
                              <Input {...field} allowClear placeholder="Email address" />
                           )}
                        />
                        {errors.email && (
                           <p className="text-red-600 text-sm">{errors.email.message}</p>
                        )}
                     </div>

                     {/* PASSWORD */}
                     <div className="mb-4">
                        <label className="block text-sm font-medium">Password</label>
                        <Controller
                           name="password"
                           control={control}
                           rules={{
                              required: "Password is required",
                              minLength: {
                                 value: 8,
                                 message: "Password must be at least 8 characters long",
                              },
                              maxLength: {
                                 value: 16,
                                 message: "Password cannot exceed 16 characters",
                              },
                              pattern: {
                                 value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/,
                                 message:
                                    "Password must contain at least one letter and one number",
                              },
                           }}
                           render={({ field }) => (
                              <Input.Password {...field} allowClear placeholder="Password" />
                           )}
                        />
                        {errors.password && (
                           <p className="text-red-600 text-sm">{errors.password.message}</p>
                        )}
                     </div>

                     {/* IMAGE */}
                     <div className="Image pb-4">
                        <Image />
                     </div>

                     {/* CREATE BUTTON */}
                     <Button
                        loading={signUpLoader}
                        className="w-full"
                        type="primary"
                        htmlType="submit"
                        disabled={!clientReady}>
                        Create Account
                     </Button>
                  </form>

                  <div className="mt-4 text-center">
                     Already have an account?{" "}
                     <Link to="/login" className="text-blue-600">
                        Log in
                     </Link>
                  </div>
               </div>
            </div>
         </motion.div>
      </>
   );
};

export default Signup;
