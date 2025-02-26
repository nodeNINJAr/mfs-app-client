import React, { useEffect, useState } from "react";
import { Table, Input, Button, Space, Tag, message } from "antd";
import { SearchOutlined, EyeOutlined, BlockOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const UserManagement = () => {
  const axiosSecure = useAxiosSecure();
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();


// **
const {data:users=[], isLoading, refetch} = useQuery({
    queryKey:['users', searchText],
    queryFn:async()=>{
    try {
        const {data} = await axiosSecure.get(`/admin/users?mobileNumber=${searchText}`);
         return data?.users;
        } catch (error) {
        console.error("Error fetching users:", error);
        message.error("Failed to fetch users");
        }
    }
})


  // Handle search by mobile number
  const handleSearch = (value) => {
    setSearchText(value);
  };


//   Handle block/unblock user
  const handleBlockUser = async (userId, isBlocked) => {
    try {
      await axiosSecure.patch(`/admin/users/${userId}/block`, { isBlocked });
      refetch();
      message.success(`User ${isBlocked ? "unblocked" : "blocked"} successfully`);
    } catch (error) {
      console.error("Error blocking/unblocking user:", error);
      message.error("Failed to update user status");
    }
  };

  

  // Columns for the users table
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Mobile Number",
      dataIndex: "mobileNumber",
      key: "mobileNumber",
    },
    {
      title: "accountType",
      dataIndex: "accountType",
      key: "accountType",
      render: (role) => (
        <Tag color={role === "admin" ? "red" : role === "agent" ? "blue" : "green"}>
          {role}
        </Tag>
      ),
    },
    {
      title: "Balance/Income",
      dataIndex: "balance",
      key: "balance",
      render: (balance, record) => (
        <span>{record.role === "agent" ? `Income: ${record.income}` : `Balance: ${balance}`}</span>
      ),
    },
    {
      title: "Status",
      dataIndex: "isBlocked",
      key: "isBlocked",
      render: (isBlocked) => (
        <Tag color={isBlocked ? "volcano" : "green"}>
          {isBlocked ? "Blocked" : "Active"}
        </Tag>
      ),
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <Space>
          <Button
            type="link"
            icon={<EyeOutlined />}
            onClick={() => navigate(`/admin/users/${record._id}/transactions`)}
          >
            View Transactions
          </Button>
          <Button
            type="link"
            icon={<BlockOutlined />}
            onClick={() => handleBlockUser(record._id, record.isBlocked)}
          >
            {record.isBlocked ? "Unblock" : "Block"}
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">User Management</h1>
      <div className="mb-6">
        <Input
          placeholder="Search by mobile number"
          prefix={<SearchOutlined />}
          value={searchText}
          onChange={(e) => handleSearch(e.target.value)}
          className="w-64"
        />
      </div>
      <Table
        dataSource={users}
        columns={columns}
        loading={isLoading}
        rowKey="_id"
        pagination={{ pageSize: 10 }}
      />
    </div>
  );
};

export default UserManagement;