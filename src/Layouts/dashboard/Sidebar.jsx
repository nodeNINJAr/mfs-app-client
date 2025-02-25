import React, { useState } from "react";
import { Menu } from "antd";
import { HomeOutlined, UserOutlined, SettingOutlined } from "@ant-design/icons";

const Sidebar = ({ role }) => {

  const adminMenu = [
    { key: "dashboard", label: "Dashboard", icon: <HomeOutlined /> },
    { key: "users", label: "Manage Users", icon: <UserOutlined /> },
    { key: "agents", label: "Approve Agents", icon: <SettingOutlined /> },
  ];

  const userMenu = [
    { key: "balance", label: "Balance Inquiry", icon: <HomeOutlined /> },
    { key: "transactions", label: "Transactions", icon: <SettingOutlined /> },
  ];

  const agentMenu = [
    { key: "balance", label: "Balance Inquiry", icon: <HomeOutlined /> },
    { key: "cash-in", label: "Cash-In Requests", icon: <SettingOutlined /> },
  ];

  const menuItems = role === "admin" ? adminMenu : role === "user" ? userMenu : agentMenu;


  //  
  return (
    <>
      {/* Sidebar */}
      <div
        className={`hidden md:block bg-gray-800 text-white h-screen fixed transition-all duration-300 ease-in-out overflow-hidden md:w-64 md:relative`}
      >
        <h2 className="text-xl font-bold mb-6 p-4">MFS System</h2>
        <Menu mode="inline" defaultSelectedKeys={["dashboard"]} items={menuItems} />
      </div>
      {/* for mobile screen */}
      <div className={`md:hidden`}>
        <h2 className="text-xl font-bold mb-6 p-4">MFS System</h2>
      </div>
    </>
  );
};

export default Sidebar;