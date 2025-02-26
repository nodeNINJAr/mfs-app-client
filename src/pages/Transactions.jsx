import React, { useEffect, useState } from "react";
import { Table, Button } from "antd";
import { useNavigate, useParams } from "react-router";
import { useAuth } from "../context/AuthContext";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";


const Transactions = () => {
  const axiosSecure = useAxiosSecure();
  const { userId } = useParams();
  const { user } = useAuth(); 
  const navigate = useNavigate();


  // 
  const {
    data: transactions = [],isLoading, refetch,} = useQuery({
      // 
    queryKey: ["transactions", userId],
    queryFn: async () => {
      try {
        const url = userId
          ? `/users/${userId}/transactions`
          : "/user/transactions";
        const { data } = await axiosSecure.get(url);
        return data?.transactions;
      } catch (error) {
        console.error("Error fetching transactions:", error);
        throw error;
      }
    },
    enabled: !!user && (user.role === "admin" ? !!userId : true),
  });

console.log(transactions);


  // Columns for the transactions table
  const columns = [
    {
      title: "Transaction ID",
      dataIndex: "transactionId",
      key: "transactionId",
    },
    // {
    //   title: "Sender/Receiver",
    //   // dataIndex: "amount",
    //   key: "transfer",
    //   render:(_, record)=>(
    //     console.log(record)
        //  <div>
        //      <h4>{record?.sender?.name}</h4>
        //  </div>
      // ),
      // render: (amount) => `${amount} Taka`,
    // },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
      render: (amount) => `${amount} Taka`,
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "Date",
      dataIndex: "timestamp",
      key: "timestamp",
      render: (date) => new Date(date).toLocaleString(),
    },
  ];

  // Admin-specific column to view user/agent details
  if (user?.role === "admin" && !userId) {
    columns.push({
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Button
          type="link"
          onClick={() => navigate(`/transactions/${record.userId}`)}
        >
          View Details
        </Button>
      ),
    });
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">
        {userId ? "User Transactions" : "My Transactions"}
      </h1>
      <Table
        dataSource={transactions}
        columns={columns}
        loading={isLoading}
        rowKey="id"
        pagination={{ pageSize: 10 }}
      />
    </div>
  );
};

export default Transactions;