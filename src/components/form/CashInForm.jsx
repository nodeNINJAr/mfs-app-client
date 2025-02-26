import React from "react";
import { Form, Input, Button, message } from "antd";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router";
import useAxiosSecure from "../../hooks/useAxiosSecure";


// 
const CashInForm = () => {
  const axiosSecure = useAxiosSecure();

  // 
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      // Call your API here to process cash-in
       await axiosSecure.post("/agent/cashIn", data);
       message.success("Cash-in successful!");
      navigate("/agent/dashboard", { replace: true });
    } catch (error) {
      console.error("Error during cash-in:", error);
      message.error("Failed to process cash-in. Please try again.");
    }
  };

  // 
  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-6 text-center">Cash-In</h1>
      <Form onFinish={handleSubmit(onSubmit)} layout="vertical">
        {/* User Mobile Number */}
        <Form.Item
          label="User Mobile Number"
          validateStatus={errors.userMobileNumber ? "error" : ""}
          help={errors.userMobileNumber?.message}
        >
          <Controller
            name="userMobileNumber"
            control={control}
            rules={{
              required: "User mobile number is required",
              pattern: {
                value: /^\d{11}$/,
                message: "Mobile number must be 11 digits",
              },
            }}
            render={({ field }) => (
              <Input
                {...field}
                placeholder="Enter user's mobile number"
                className="w-full"
              />
            )}
          />
        </Form.Item>

        {/* Amount */}
        <Form.Item
          label="Amount"
          validateStatus={errors.amount ? "error" : ""}
          help={errors.amount?.message}
        >
          <Controller
            name="amount"
            control={control}
            rules={{
              required: "Amount is required",
              min: {
                value: 1,
                message: "Amount must be at least 1 taka",
              },
            }}
            render={({ field }) => (
              <Input
                {...field}
                type="number"
                placeholder="Enter amount"
                className="w-full"
              />
            )}
          />
        </Form.Item>

        {/* PIN */}
        <Form.Item
          label="PIN"
          validateStatus={errors.pin ? "error" : ""}
          help={errors.pin?.message}
        >
          <Controller
            name="pin"
            control={control}
            rules={{
              required: "PIN is required",
              pattern: {
                value: /^\d{5}$/,
                message: "PIN must be 5 digits",
              },
            }}
            render={({ field }) => (
              <Input.Password
                {...field}
                placeholder="Enter your PIN"
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
            className="w-full bg-blue-500 hover:bg-blue-600"
          >
            Process Cash-In
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CashInForm;