import React from "react";
import Navbar from "./Navbar";
import Topbar from "./Sidebar";
import NavigationCards from "../../components/card/NavigationCards";
import { Outlet } from "react-router";


const UserDashboard = () => {
  return (
    <div>
      {/* Main Content */}
      <div className=" bg-gray-100 min-h-screen">
        <Navbar role="user" />
        {/*  */}
         <div className="p-6">
            <NavigationCards/>  
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;