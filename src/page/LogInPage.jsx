import { useEffect, useState } from "react";
import { Button, Input } from "antd";
import { Link } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { logInActionsLoad } from "../redux/action/auth-actions";

const Login = () => {
   const [clientReady, setClientReady] = useState(false);
   const dispatch = useDispatch();
   const logInLoader = useSelector(state => state.AuthReducer.loginLoader);   
      
   // useForm hook initialization
   const {
      control,
      handleSubmit,
      formState: { errors },
   } = useForm();

   // To disable submit button at the beginning.
   useEffect(() => {
      setClientReady(true);
   }, []);

   const onFinish = (values) => {
      dispatch(logInActionsLoad({ email: values.email, password: values.password }));
   };

   return (
      <div className="container flex items-center justify-center max-w-full h-[79vh]">
         <div className="w-96 h-[84%] rounded-xl shadow-lg flex items-center justify-center border-2">
            <div className="w-80">
               <h1 className="text-3xl font-semibold pb-4">Log in</h1>
               <p className="text-gray-500 mb-6">Enter your details below</p>

               {/* Form with handleSubmit */}
               <form onSubmit={handleSubmit(onFinish)}>
                  {/* Email*/}
                  <div className="mb-4">
                     <label>Email or Phone Number</label>
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
                        render={({ field }) => {
                           return <Input {...field} allowClear placeholder="Email address" />;
                        }}
                     />
                     {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                  </div>

                  {/* Password */}
                  <div className="mb-4">
                     <label>Password</label>
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
                              message: "Password must be at most 16 characters long",
                           },
                           pattern: {
                              value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/,
                              message: "Password must contain at least one letter and one number",
                           },
                        }}
                        render={({ field }) => {
                           return <Input.Password {...field} allowClear placeholder="Password" />;
                        }}
                     />
                     {errors.password && <p className="text-red-500">{errors.password.message}</p>}
                  </div>

                  <div className="flex gap-x-3 items-start">
                     {/* Submit Button */}
                     <Button
                        loading={logInLoader}
                        type="primary"
                        htmlType="submit"
                        disabled={!clientReady || Object.keys(errors).length > 0}>
                        Log in
                     </Button>

                     {/* Forgot Password Link */}
                     <Button className="border-none">
                        <Link to="/forgot-password" className="text-blue-500 hover:underline">
                           Forgot password?
                        </Link>
                     </Button>
                  </div>
               </form>
            </div>
         </div>
      </div>
   );
};

export default Login;
