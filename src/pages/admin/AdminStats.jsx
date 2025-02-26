import React from "react";

const AdminStats = () => {
  return (
    <div>
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
  );
};

export default AdminStats;
