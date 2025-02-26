import React from "react";
import { Menu } from "antd";
import { useNavigate } from "react-router";
import {
  HomeOutlined,
  SettingOutlined,
  MoneyCollectOutlined,
  UserOutlined,
} from "@ant-design/icons";

const Topbar = ({ role }) => {
  const navigate = useNavigate();

  // Define menu items for each role
  const adminMenu = [
    { key: "dashboard", label: "Dashboard", icon: <HomeOutlined />, path: "/admin/dashboard" },
    { key: "users", label: "Manage Users", icon: <UserOutlined />, path: "/admin/users" },
    { key: "agents", label: "Approve Agents", icon: <SettingOutlined />, path: "/admin/agents" },
  ];

  const userMenu = [
    { key: "balance", label: "Balance Inquiry", icon: <HomeOutlined />, path: "/user/balance" },
    { key: "transactions", label: "Transactions", icon: <SettingOutlined />, path: "/user/transactions" },
    { key: "send-money", label: "Send Money", icon: <MoneyCollectOutlined />, path: "/user/send-money" },
  ];

  const agentMenu = [
    { key: "balance", label: "Balance Inquiry", icon: <HomeOutlined />, path: "/agent/balance" },
    { key: "cash-in", label: "Cash-In Requests", icon: <SettingOutlined />, path: "/agent/cash-in" },
  ];

  // Determine which menu to display based on the role
  const menuItems = role === "admin" ? adminMenu : role === "user" ? userMenu : agentMenu;

  // Handle menu item clicks
  const handleMenuClick = (item) => {
    navigate(item.path); 
  };

  return (
    <>
      {/* Sidebar for desktop */}
      <div
        className={`hidden md:block bg-gray-800 text-white h-screen fixed transition-all duration-300 ease-in-out overflow-hidden md:w-64 md:relative`}
      >
        <h2 className="text-xl font-bold mb-6 p-4">MFS System</h2>
        <Menu
          mode="inline"
          defaultSelectedKeys={["dashboard"]}
          items={menuItems.map((item) => ({
            key: item.key,
            icon: item.icon,
            label: item.label,
            onClick: () => handleMenuClick(item),
          }))}
        />
      </div>

      {/* Sidebar for mobile */}
      <div className={`md:hidden`}>
        <h2 className="text-xl font-bold mb-6 p-4">MFS System</h2>
      </div>
    </>
  );
};

export default Topbar;