import { Button, Form, Input } from "antd";
import "tailwindcss/tailwind.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Signup = () => {
   const [form] = Form.useForm();
   const [clientReady, setClientReady] = useState(false);

   useEffect(() => {
      setClientReady(true);
   }, []);

   const onFinish = (values) => {
      console.log("Form values:", values);
   };

   return (
      <div className="container max-w-full min-h-[79vh] flex items-center justify-center">
         <div className="w-96 h-[90%] rounded-lg shadow-lg border-2">
            <div className="p-5">
               <h2 className="text-3xl font-bold pb-4">Create an account</h2>
               <p className="mb-6">Enter your details below</p>

               {/* Bind the form instance to the Form */}
               <Form form={form} name="signup" layout="vertical" onFinish={onFinish}>
                  <Form.Item
                     label="Full Name"
                     name="name"
                     rules={[{ required: true, message: "Please enter your full name!" }]}>
                     <Input placeholder="Full name" />
                  </Form.Item>

                  <Form.Item
                     label="Email address"
                     name="email"
                     rules={[
                        {
                           required: true,
                           message: "Please enter your email address!",
                        },
                     ]}>
                     <Input placeholder="Email address" />
                  </Form.Item>

                  <Form.Item
                     label="Password"
                     name="password"
                     rules={[{ required: true, message: "Please enter your password!" }]}>
                     <Input.Password placeholder="Password" />
                  </Form.Item>

                  <Form.Item shouldUpdate>
                     {() => (
                        <Button
                        className="w-full"
                           type="primary"
                           htmlType="submit"
                           disabled={
                              !clientReady ||
                              !form.isFieldsTouched(true) ||
                              form.getFieldsError().some(({ errors }) => errors.length)
                           }>
                           Create Account
                        </Button>
                     )}
                  </Form.Item>
               </Form>

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
