import React from "react";
import { Form, Input, Button, message } from "antd";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const CashOutForm = () => {
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
      console.log("Cash Out Data:", data);
      await axiosSecure.post('/user/cashOut', data)
      message.success("Cash out successful!");
      navigate("/user/dashboard"); // Redirect to dashboard after success
    } catch (error) {
      console.error("Error during cash out:", error);
      message.error("Failed to process cash out. Please try again.");
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-6 text-center">Cash Out</h1>
      <Form onFinish={handleSubmit(onSubmit)} layout="vertical">
        {/* Agent Mobile Number */}
        <Form.Item
          label="Agent Mobile Number"
          validateStatus={errors.agentMobileNumber ? "error" : ""}
          help={errors.agentMobileNumber?.message}
        >
          <Controller
            name="agentMobileNumber"
            control={control}
            rules={{
              required: "Agent mobile number is required",
              pattern: {
                value: /^\d{11}$/,
                message: "Mobile number must be 11 digits",
              },
            }}
            render={({ field }) => (
              <Input
                {...field}
                placeholder="Enter agent's mobile number"
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
                value: 50,
                message: "Minimum amount is 50 taka",
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
            Cash Out
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CashOutForm;