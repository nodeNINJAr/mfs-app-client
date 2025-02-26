import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { Outlet } from "react-router";


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
           {/*  */}
           <Outlet/>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;