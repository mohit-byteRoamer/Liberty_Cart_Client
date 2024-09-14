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
      <div className="container flex items-center justify-center max-w-full h-[79vh]">
         <div className="w-96 h-[75%] rounded-xl shadow-lg flex items-center justify-center border-2">
            <div className="w-80">
               <h1 className="text-3xl font-semibold pb-4">Log in</h1>
               <p className="text-gray-500 mb-6">Enter your details below</p>
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
