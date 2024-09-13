import { Form, Input, Button } from 'antd';
import { GoogleOutlined } from '@ant-design/icons';
import 'tailwindcss/tailwind.css';

const Signup = () => {
  const onFinish = (values) => {
    console.log('Form values: ', values);
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-10 rounded-lg shadow-lg flex">
        <div className="w-1/2">
          <h2 className="text-3xl font-bold mb-6">Create an account</h2>
          <p className="mb-6">Enter your details below</p>

          <Form
            name="signup"
            layout="vertical"
            onFinish={onFinish}
            className="space-y-4"
          >
            <Form.Item
              label="Name"
              name="name"
              rules={[{ required: true, message: 'Please enter your name!' }]}
            >
              <Input placeholder="Name" />
            </Form.Item>

            <Form.Item
              label="Email or Phone Number"
              name="email"
              rules={[
                {
                  required: true,
                  message: 'Please enter your email or phone number!',
                },
              ]}
            >
              <Input placeholder="Email or Phone Number" />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true, message: 'Please enter your password!' }]}
            >
              <Input.Password placeholder="Password" />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="w-full bg-red-500 hover:bg-red-600 text-white"
              >
                Create Account
              </Button>
            </Form.Item>
          </Form>

          <div className="text-center my-4">or</div>

          <Button
            icon={<GoogleOutlined />}
            className="w-full border-gray-300"
            size="large"
          >
            Sign up with Google
          </Button>

          <div className="mt-4 text-center">
            Already have an account?{' '}
            <a href="/login" className="text-blue-600">
              Log in
            </a>
          </div>
        </div>

        <div className="w-1/2 flex justify-center items-center">
          <img
            src="https://img.freepik.com/free-vector/sign-up-concept-illustration_114360-7965.jpg?w=740&t=st=1726230704~exp=1726231304~hmac=3fefd53fdd620702d906cb6f879f525cb2734f9352c356912bdd8f2018471ddf"
            alt="Signup Illustration"
            className="w-3/4"
          />
        </div>
      </div>
    </div>
  );
};

export default Signup;

      // <div className="flex h-screen">
      //    {/* Left Side: Form */}
      //    <div className="w-1/2 flex items-center justify-center">
      //       <div className="w-2/3">
      //          <h1 className="text-3xl font-semibold mb-4">Create an account</h1>
      //          <p className="text-gray-500 mb-8">Enter your details below</p>

      //          <form className="space-y-4">
      //             <input
      //                type="text"
      //                placeholder="Name"
      //                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none"
      //             />
      //             <input
      //                type="text"
      //                placeholder="Email or Phone Number"
      //                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none"
      //             />
      //             <input
      //                type="password"
      //                placeholder="Password"
      //                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none"
      //             />

      //             <ViewBtn
      //                type="submit"
      //                text="Create Account"
      //                className={" w-full h-14 text-white py-3 rounded-md hover:bg-red-600"}
      //             />
      //             <ViewBtn
      //                type="submit"
      //                text="Sign up with Google"
      //                className="w-full !text-black text-lg font-normal bg-white hover:bg-gray-100 h-14 py-3 rounded-md"
      //                icon={<FcGoogle className="text-2xl" />}
      //             />
      //          </form>

      //          <button className="mt-6 text-center text-gray-500">
      //             Already have an account?{" "}
      //             <Link to="/login" className="text-black underline">
      //                Log in
      //             </Link>
      //          </button>
      //       </div>
      //    </div>

      //    {/* Right Side: Image */}
      //    <div className="w-1/2 bg-blue-100 flex items-center justify-center">
      //       <img
      //          src="https://img.freepik.com/free-vector/sign-up-concept-illustration_114360-7965.jpg?w=740&t=st=1726230704~exp=1726231304~hmac=3fefd53fdd620702d906cb6f879f525cb2734f9352c356912bdd8f2018471ddf"
      //          alt="Shopping cart and mobile"
      //          className="h-auto max-w-full"
      //       />
      //    </div>
      // </div>