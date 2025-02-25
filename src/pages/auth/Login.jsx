import React from "react";
import { Form, Input, Button, message } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useForm, Controller } from "react-hook-form";
import { useAuth } from "../../context/AuthContext";



// 
const Login = () => {
  const { login } = useAuth();
  const { control, handleSubmit, formState: { errors } } = useForm();

  // Handle form submission
  const onSubmit = async (values) => {
    try {
      await login(values);
      message.success("Login successful!");
    } catch (error) {
      message.error("Login failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
        <h1 className="text-2xl font-bold text-center mb-6">Login</h1>
        <Form onFinish={handleSubmit(onSubmit)} className="space-y-4">
          {/* userName Field */}
          <Form.Item
            validateStatus={errors.userName ? "error" : ""}
            help={errors.userName?.message}
          >
            <Controller
              name="userName"
              control={control}
              rules={{
                required: "Please input your mobile number or email!",
                validate: (value) => {
                  const isMobileValid = /^[0-9]{10}$/.test(value);
                  const isEmailValid = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                    value
                  );
                  return isMobileValid || isEmailValid || "Invalid input";
                },
              }}
              render={({ field }) => (
                <Input
                  {...field}
                  prefix={<UserOutlined className="text-gray-500" />}
                  placeholder="Mobile Number/Email"
                  className="w-full"
                />
              )}
            />
          </Form.Item>

          {/* PIN Field */}
          <Form.Item
            validateStatus={errors.pin ? "error" : ""}
            help={errors.pin?.message}
          >
            <Controller
              name="pin"
              control={control}
              rules={{
                required: "Please input your PIN!",
                pattern: {
                  value: /^[0-9]{5}$/,
                  message: "PIN must be exactly 5 digits",
                },
              }}
              render={({ field }) => (
                <Input.Password
                  {...field}
                  prefix={<LockOutlined className="text-gray-500" />}
                  placeholder="PIN"
                  className="w-full"
                />
              )}
            />
          </Form.Item>

          {/* Submit Button */}
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              block
              className="bg-indigo-600 hover:bg-indigo-700"
            >
              Login
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;