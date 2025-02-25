import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";



const AgentDashboard = () => {
  
  // 
  return (
    <div className=" md:flex">
      {/* Sidebar */}
      <Sidebar role="agent" />
       
      {/* Main Content */}
      <div className="flex-1 bg-gray-100 min-h-screen">
        <Navbar role="agent" />
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">Agent Dashboard</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold">Agent Balance</h3>
              <p className="text-2xl">50,000 Taka</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold">Pending Cash-In Requests</h3>
              <p className="text-sm">5 Requests</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentDashboard;