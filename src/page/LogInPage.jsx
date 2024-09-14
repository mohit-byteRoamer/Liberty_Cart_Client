import { useEffect, useState } from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Input } from "antd";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Login = () => {
   const [clientReady, setClientReady] = useState(false);

   // useForm hook initialization
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm();

   // To disable submit button at the beginning.
   useEffect(() => {
      setClientReady(true);
   }, []);

   const onFinish = (values) => {
      console.log("Finish:", values);
   };

   return (
      <div className="container flex items-center justify-center max-w-full h-[79vh]">
         <div className="w-96 h-[78%] rounded-xl shadow-lg flex items-center justify-center border-2">
            <div className="w-80">
               <h1 className="text-3xl font-semibold pb-4">Log in</h1>
               <p className="text-gray-500 mb-6">Enter your details below</p>

               {/* Form with handleSubmit */}
               <form onSubmit={handleSubmit(onFinish)}>
                  
                  {/* Email or Phone Number */}
                  <div className="mb-4">
                     <label>Email or Phone Number</label>
                     <Input
                        {...register("email", {
                           required: "Please input your Email or Phone Number!",
                           pattern: {
                              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                              message: "Please enter a valid email address",
                           },
                        })}
                        maxLength={40}
                        size="large"
                        allowClear
                        prefix={<UserOutlined />}
                        placeholder="Username"
                     />
                     {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                  </div>

                  {/* Password */}
                  <div className="mb-4">
                     <label>Password</label>
                     <Input.Password
                        {...register("password", {
                           required: "Please input your password!",
                           minLength: { value: 6, message: "Password must be at least 6 characters long" },
                        })}
                        maxLength={16}
                        size="large"
                        autoComplete="off"
                        prefix={<LockOutlined />}
                        placeholder="Password"
                     />
                     {errors.password && <p className="text-red-500">{errors.password.message}</p>}
                  </div>

                  <div className="flex gap-x-3 items-start">
                     {/* Submit Button */}
                     <Button
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
