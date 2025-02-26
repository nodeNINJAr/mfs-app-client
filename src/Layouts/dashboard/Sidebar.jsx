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
    { key: "dashboard", label: "Dashboard", icon: <HomeOutlined />, path: "/admin" },
    { key: "users", label: "Manage Users", icon: <UserOutlined />, path: "/admin/users" },
    { key: "agents", label: "Approve Agents", icon: <SettingOutlined />, path: "/admin/agent-approval" },
  ];


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
          items={adminMenu.map((item) => ({
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