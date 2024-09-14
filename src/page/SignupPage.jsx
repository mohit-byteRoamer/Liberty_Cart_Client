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
      <div className="max-w-full min-h-[70vh] flex items-center justify-center">
         <div className="bg-white rounded-lg shadow-lg flex">
            <div className="w-1/2 left-side p-5">
               <h2 className="text-3xl font-bold mb-6">Create an account</h2>
               <p className="mb-6">Enter your details below</p>

               {/* Bind the form instance to the Form */}
               <Form form={form} name="signup" layout="vertical" onFinish={onFinish}>
                  <Form.Item
                     label="Name"
                     name="name"
                     rules={[{ required: true, message: "Please enter your name!" }]}>
                     <Input placeholder="Name" />
                  </Form.Item>

                  <Form.Item
                     label="Email or Phone Number"
                     name="email"
                     rules={[
                        {
                           required: true,
                           message: "Please enter your email or phone number!",
                        },
                     ]}>
                     <Input placeholder="Email or Phone Number" />
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

            <div className="right-side w-1/2 flex justify-center items-center">
               <img
                  src="https://img.freepik.com/free-vector/sign-up-concept-illustration_114360-7965.jpg?w=740&t=st=1726230704~exp=1726231304~hmac=3fefd53fdd620702d906cb6f879f525cb2734f9352c356912bdd8f2018471ddf"
                  alt="Signup Illustration"
                  className="w-full"
               />
            </div>
         </div>
      </div>
   );
};

export default Signup;
