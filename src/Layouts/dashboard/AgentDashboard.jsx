import React from "react";
import Sidebar from "./Topbar";
import Navbar from "./Navbar";
import { Link } from "react-router";



const AgentDashboard = () => {
  
  // 
  return (
    <div>
      {/* Main Content */}
      <div className="flex-1 bg-gray-100 min-h-screen ">
        <Navbar role="agent" />
        <div className="p-6 container mx-auto">
          <h2 className="text-2xl font-bold mb-4">Agent Dashboard</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* income */}
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold">Income</h3>
              <p className="text-2xl">50,000 Taka</p>
            </div>
              {/* cash in */}
              <Link to={'/agent/CashIn'} className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold">Cash In</h3>
              <p className="text-sm">Cash In To User Account</p>
            </Link>
            {/* transactions */}
            <Link to={'/agent/transactions'} className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold">All Transactions</h3>
              <p className="text-sm">5 Total Tansactions</p>
            </Link>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentDashboard;