import React from "react";
import Sidebar from "./Topbar";
import Navbar from "./Navbar";


const AdminDashboard = () => {


  // 
  return (
    <div className=" md:flex">
      {/* Sidebar */}
      <Sidebar role="admin" />

      {/* Main Content */}
      <div className="flex-1 bg-gray-100 min-h-screen">
        <Navbar role="admin" />
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold">Total Users</h3>
              <p className="text-2xl">1,200</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold">Total Agents</h3>
              <p className="text-2xl">50</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold">Total Transactions</h3>
              <p className="text-2xl">10,000</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;