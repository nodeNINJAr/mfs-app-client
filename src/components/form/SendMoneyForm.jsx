import React from "react";
import { Form, Input, Button, message } from "antd";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const SendMoneyForm = () => {
  const axiosSecure = useAxiosSecure();


    // 
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    // 
    try {
      
      await axiosSecure.post('/user/sendMoney',data )  
      message.success("Money sent successfully!");
      navigate("/user/dashboard"); // Redirect to dashboard after success
    } catch (error) {
      console.error("Error sending money:", error);
      message.error("Failed to send money. Please try again.");
    }
  };

//   
  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-6 text-center">Send Money</h1>
      <Form onFinish={handleSubmit(onSubmit)} layout="vertical">
        {/* Receiver Mobile Number */}
        <Form.Item
          label="Receiver Mobile Number"
          validateStatus={errors.receiverMobileNumber ? "error" : ""}
          help={errors.receiverMobileNumber?.message}
        >
          <Controller
            name="receiverMobileNumber"
            control={control}
            rules={{
              required: "Mobile number is required",
              pattern: {
                value: /^\d{11}$/,
                message: "Mobile number must be 11 digits",
              },
            }}
            render={({ field }) => (
              <Input
                {...field}
                placeholder="Enter receiver's mobile number"
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
            Send Money
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SendMoneyForm;