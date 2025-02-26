import React from "react";
import { Route, Routes } from "react-router";
import Layouts from "../Layouts/AppLayouts";
import UserDashboard from "../Layouts/dashboard/UserDashboard";
import AgentDashboard from "../Layouts/dashboard/AgentDashboard";
import AdminDashboard from "../Layouts/dashboard/AdminDashboard";
import Register from "../pages/auth/Register";
import Login from "../pages/auth/Login";
import SendMoney from "../pages/user/SendMoney";
import CashOut from "../pages/user/CashOut";
import Transactions from "../pages/Transactions";
import CashIn from "../pages/agent/CashIn";



// 
const Router = () => {

  return(
    <Routes>
    <Route path="/" element={<Layouts />} />
    {/* user route */}
    <Route path="user/dashboard" element={<UserDashboard />}/>
    <Route path="user/send-money" element={<SendMoney/>}/>
    <Route path="user/cash-out" element={<CashOut/>}/>
    <Route path="user/transactions" element={<Transactions/>}/>
    {/* agent route */}
    <Route path="agent/dashboard" element={<AgentDashboard />} />
    <Route path="agent/CashIn" element={<CashIn />}/>
    <Route path="agent/transactions" element={<Transactions/>}/>
     {/* admin route */}
    <Route path="/admin/dashboard" element={<AdminDashboard />} />

    {/* auth */}
       <Route path="auth/login" element={<Login />} />
       <Route path="auth/register" element={<Register />} />
  </Routes>
  )
};

export default Router;
