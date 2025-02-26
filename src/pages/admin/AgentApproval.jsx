import React from "react";
import { Table, Button, Tag, message } from "antd";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";


const AgentApproval = () => {
  const axiosSecure = useAxiosSecure();


  //** 
  const {data:agents=[], isLoading, refetch} = useQuery({
    queryKey:['Agents'],
    queryFn:async()=>{
    try {
        const {data} = await axiosSecure("/admin/agents/approval-requests");
         return data?.agents;
        } catch (error) {
            console.error("Error fetching agents:", error);
            message.error("Failed to fetch agent requests");
        }
    }
})

  // Handle accept/reject agent
  const handleAgentAction = async (agentId, action) => {
    try {
      await axiosSecure.patch(`/admin/agents/${agentId}/${action}`);
      refetch();
      message.success(`Agent request ${action === "approve" ? "approved" : "rejected"}`);
    } catch (error) {
      console.error("Error updating agent status:", error);
      message.error("Failed to update agent status");
    }
  };

  // Columns for the agents table
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
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Status",
      dataIndex: "isApproved",
      key: "isApproved",
      render: (status) => (
        <Tag color={status === "pending" ? "orange" : status === "approved" ? "green" : "red"}>
          {status}
        </Tag>
      ),
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <div className="flex space-x-2">
          <Button
            type="primary"
            icon={<CheckOutlined />}
            onClick={() => handleAgentAction(record._id, "approve")}
            disabled={record?.isApproved !== "pending"}
          >
            Approve
          </Button>
          <Button
            type="primary"
            danger
            icon={<CloseOutlined />}
            onClick={() => handleAgentAction(record._id, "reject")}
            disabled={record.isApproved !== "pending"}
          >
            Reject
          </Button>
        </div>
      ),
    },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Agent Approval Requests</h1>
      <Table
        dataSource={agents}
        columns={columns}
        loading={isLoading}
        rowKey="_id"
        pagination={{ pageSize: 10 }}
      />
    </div>
  );
};

export default AgentApproval;