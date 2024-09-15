import { Button, Input } from "antd";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { signUpActionsLoad } from "../redux/action/auth-actions";
import { useDispatch } from "react-redux";

const Signup = () => {
  const dispatch = useDispatch();
  const [clientReady, setClientReady] = useState(false);

  useEffect(() => {
    setClientReady(true);
  }, []);

  // Initialize react-hook-form
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    dispatch(
      signUpActionsLoad({
        userName: data.fullName,
        email: data.email,
        password: data.password,
      })
    );
  };

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
                  <>
                    <Input {...field} allowClear placeholder="Full name" />
                  </>
                )}
              />

              {errors.fullName && (
                <p className="text-red-600 text-sm">
                  {errors.fullName.message}
                </p>
              )}
            </div>

            {/* Email */}
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
                render={({ field }) => {
                  return (
                    <Input {...field} allowClear placeholder="Email address" />
                  );
                }}
              />
              {errors.email && (
                <p className="text-red-600 text-sm">{errors.email.message}</p>
              )}
            </div>

            {/* Password */}
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
                  pattern: {
                    value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/,
                    message:
                      "Password must contain at least one letter and one number",
                  },
                }}
                render={({ field }) => {
                  return (
                    <Input.Password
                      {...field}
                      allowClear
                      placeholder="Password"
                    />
                  );
                }}
              />

              {errors.password && (
                <p className="text-red-600 text-sm">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Button */}
            <div className="mb-4">
              <Button
                className="w-full"
                type="primary"
                htmlType="submit"
                disabled={!clientReady}
              >
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
