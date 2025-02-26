import React from "react";
import { Table, message } from "antd";
import { useParams } from "react-router";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const UserTransactions = () => {
  const axiosSecure = useAxiosSecure();
  const { userId } = useParams();
// ** Fetch transactions for the user
const {data:transactions=[], isLoading, refetch} = useQuery({
    queryKey:[userId],
    enabled:!!userId,
    queryFn:async()=>{
    try {
        const {data} = await axiosSecure(`admin/users/${userId}/transactions`);
         return data?.transactions;
        } catch (error) {
        console.error("Error fetching user transactions:", error);
        message.error("Failed to fetch");
        }
    }
})

  // Columns for the transactions table
  const columns = [
    {
      title: "Transaction ID",
      dataIndex: "_id",
      key: "_id",
    },
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
      dataIndex: "createdAt",
      key: "createdAt",
      render: (date) => new Date(date).toLocaleString(),
    },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">User Transactions</h1>
      <Table
        dataSource={transactions}
        columns={columns}
        loading={isLoading}
        rowKey="_id"
        pagination={{ pageSize: 10 }}
      />
    </div>
  );
};

export default UserTransactions;