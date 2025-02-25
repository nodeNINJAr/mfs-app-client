import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";


const UserDashboard = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar role="user" />
      {/* Main Content */}
      <div className="flex-1 bg-gray-100 min-h-screen">
        <Navbar role="user" />
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">User Dashboard</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold">Account Balance</h3>
              <p className="text-2xl">500 Taka</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold">Last Transaction</h3>
              <p className="text-sm">Sent 100 Taka to 0123456789</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;