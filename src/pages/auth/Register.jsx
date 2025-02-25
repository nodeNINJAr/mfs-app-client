import React from "react";
import { Form, Input, Button, Select, message } from "antd";
import { UserOutlined, LockOutlined, MailOutlined } from "@ant-design/icons";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router";
import useAxiosPublic from "../../hooks/useAxiosPublic";



// **
const Register = () => {
  const axiosPublic = useAxiosPublic();
  const { control, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  // Handle form submission
  const onSubmit = async (data) => {
    // 
    try {
      const response = await axiosPublic.post("/auth/register", data);
      if (response.status===201) {
        message.success("Registration successful! Please login.");
        navigate("/auth/login"); // Redirect to login page
      } 
    } catch (error) {
      message.error(`${error?.response?.data?.message}`);
    }
  };


  //
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
        <h1 className="text-2xl font-bold text-center mb-6">Register</h1>
        <Form onFinish={handleSubmit(onSubmit)} className="space-y-4">
          {/* Name Field */}
          <Form.Item
            validateStatus={errors.name ? "error" : ""}
            help={errors.name?.message}
          >
            <Controller
              name="name"
              control={control}
              rules={{ required: "Please input your name!" }}
              render={({ field }) => (
                <Input
                  {...field}
                  prefix={<UserOutlined className="text-gray-500" />}
                  placeholder="Name"
                  className="w-full"
                />
              )}
            />
          </Form.Item>

          {/* Mobile Number Field */}
          <Form.Item
            validateStatus={errors.mobileNumber ? "error" : ""}
            help={errors.mobileNumber?.message}
          >
            <Controller
              name="mobileNumber"
              control={control}
              rules={{
                required: "Please input your mobile number!",
                pattern: {
                  value: /^[0-9]{11}$/,
                  message: "Mobile number must be exactly 10 digits",
                },
              }}
              render={({ field }) => (
                <Input
                  {...field}
                  prefix={<UserOutlined className="text-gray-500" />}
                  placeholder="Mobile Number"
                  className="w-full"
                />
              )}
            />
          </Form.Item>

          {/* Email Field */}
          <Form.Item
            validateStatus={errors.email ? "error" : ""}
            help={errors.email?.message}
          >
            <Controller
              name="email"
              control={control}
              rules={{
                required: "Please input your email!",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              }}
              render={({ field }) => (
                <Input
                  {...field}
                  prefix={<MailOutlined className="text-gray-500" />}
                  placeholder="Email"
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

          {/* Account Type Field */}
          <Form.Item
            validateStatus={errors.accountType ? "error" : ""}
            help={errors.accountType?.message}
          >
            <Controller
              name="accountType"
              control={control}
              rules={{ required: "Please select an account type!" }}
              render={({ field }) => (
                <Select
                  {...field}
                  placeholder="Select Account Type"
                  className="w-full"
                >
                  <Select.Option value="user">User</Select.Option>
                  <Select.Option value="agent">Agent</Select.Option>
                </Select>
              )}
            />
          </Form.Item>

          {/* NID Field */}
          <Form.Item
            validateStatus={errors.nid ? "error" : ""}
            help={errors.nid?.message}
          >
            <Controller
              name="nid"
              control={control}
              rules={{
                required: "Please input your NID!",
                pattern: {
                  value: /^[0-9]{10,17}$/,
                  message: "NID must be between 10 and 17 digits",
                },
              }}
              render={({ field }) => (
                <Input
                  {...field}
                  prefix={<UserOutlined className="text-gray-500" />}
                  placeholder="NID"
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
              Register
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Register;