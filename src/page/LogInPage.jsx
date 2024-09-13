import { useEffect, useState } from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import { Link } from "react-router-dom";

const Login = () => {
   const [form] = Form.useForm();
   const [clientReady, setClientReady] = useState(false);

   // To disable submit button at the beginning.
   useEffect(() => {
      setClientReady(true);
   }, []);
   const onFinish = (values) => {
      console.log("Finish:", values);
   };
   return (
      <div className="flex h-[75vh]">
         {/* left side: image */}
         <div className="w-1/2 bg-blue-100 flex items-center justify-center">
            <img
               src="https://img.freepik.com/free-vector/sign-page-abstract-concept-illustration-enter-application-mobile-screen-user-login-form-website-page-interface-ui-new-profile-registration-email-account_335657-936.jpg?w=740&t=st=1726230076~exp=1726230676~hmac=937ad6934a823b2279cf61325c60f2f738d09d2be2fe31d8131b326cf1fc3ded"
               alt="Shopping cart and mobile"
               className="h-[100%] bg-white object-contain w-full"
            />
         </div>

         {/* right side: Form */}
         <div className="w-1/2 flex items-center justify-center">
            <div className="w-2/3">
               <h1 className="text-3xl font-semibold mb-4">Log in to Exclusive</h1>
               <p className="text-gray-500 mb-8">Enter your details below</p>
               <Form form={form} name="vertical_login" layout="vertical" onFinish={onFinish}>
                  <Form.Item
                     name="email"
                     label="Email or Phone Number"
                     rules={[
                        {
                           required: true,
                           message: "Please input your Email or Phone Number!",
                        },
                     ]}>
                     <Input prefix={<UserOutlined />} placeholder="Username" />
                  </Form.Item>
                  <Form.Item
                     name="password"
                     label="Password"
                     rules={[
                        {
                           required: true,
                           message: "Please input your password!",
                        },
                     ]}>
                     <Input prefix={<LockOutlined />} type="password" placeholder="Password" />
                  </Form.Item>
                  <div className="flex gap-x-3 items-start">
                     <Form.Item shouldUpdate>
                        {() => (
                           <Button
                              type="primary"
                              htmlType="submit"
                              disabled={
                                 !clientReady ||
                                 !form.isFieldsTouched(true) ||
                                 !!form.getFieldsError().filter(({ errors }) => errors.length)
                                    .length
                              }>
                              Log in
                           </Button>
                        )}
                     </Form.Item>
                     {/* Forgot Password Link */}
                     <Button className="border-none">
                        <Link to="/forgot-password" className="text-blue-500 hover:underline">
                           Forgot password?
                        </Link>
                     </Button>
                  </div>
               </Form>
            </div>
         </div>
      </div>
   );
};
export default Login;
