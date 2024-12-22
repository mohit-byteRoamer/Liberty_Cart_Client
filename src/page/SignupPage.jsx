import { Button, Input, Radio } from "antd";
import { Link } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import { signUpActionsLoad } from "../redux/action/auth-actions";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import Image from "./Image";
import toast from "react-hot-toast";
import { IoCreateOutline } from "react-icons/io5";

const Signup = () => {
   const dispatch = useDispatch();
   const signUpLoader = useSelector((state) => state.AuthReducer?.signUpLoader);

   // GET UPLOAD IMAGE_URL
   const imageURL = useSelector((state) => state.UploadFileReducer?.uploadFile);

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
            fullName: data.fullName,
            userName: data.userName,
            email: data.email,
            password: data.password,
            avatar: imageURL,
            role: data.role,
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
            className="flex items-center justify-center max-w-full min-h-[89vh]">
            <div className="w-96 rounded-2xl shadow-xl border-2">
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

                     {/* USER NAME */}
                     <div className="mb-4">
                        <label className="block text-sm font-medium">User Name</label>
                        <Controller
                           name="userName"
                           control={control}
                           rules={{
                              required: "User name is required",
                              minLength: {
                                 value: 3,
                                 message: "User name must be at least 3 characters long",
                              },
                              maxLength: {
                                 value: 50,
                                 message: "User name cannot exceed 50 characters",
                              },
                              pattern: {
                                 value: /^[A-Za-z\s]+$/,
                                 message: "User name can only contain letters and spaces",
                              },
                           }}
                           render={({ field }) => (
                              <Input {...field} allowClear placeholder="Full name" />
                           )}
                        />
                        {errors.userName && (
                           <p className="text-red-600 text-sm">{errors.userName.message}</p>
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

                     {/* ROLE SELECTION (Admin or User) */}
                     <div className="mb-4">
                        <label className="block text-sm font-medium">Select Role</label>
                        <Controller
                           name="role"
                           control={control}
                           rules={{ required: "Please select a role" }}
                           render={({ field }) => (
                              <Radio.Group {...field}>
                                 <Radio value="admin">Admin</Radio>
                                 <Radio value="user">User</Radio>
                              </Radio.Group>
                           )}
                        />
                        {errors.role && (
                           <p className="text-red-600 text-sm">{errors.role.message}</p>
                        )}
                     </div>

                     {/* CREATE BUTTON */}
                     <Button
                        loading={signUpLoader}
                        className="w-full"
                        type="primary"
                        htmlType="submit">
                        <IoCreateOutline className="text-white" />
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
