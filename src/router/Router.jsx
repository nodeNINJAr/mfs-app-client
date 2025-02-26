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
import Transaction from "../pages/Transaction";

const Router = () => {

  return(
    <Routes>
    <Route path="/" element={<Layouts />} />
    <Route path="user/dashboard" element={<UserDashboard />}>
    </Route>
    <Route path="user/send-money" element={<SendMoney/>}/>
    <Route path="user/cash-out" element={<CashOut/>}/>
    <Route path="user/transaction" element={<Transaction/>}/>
    <Route path="/agent/dashboard" element={<AgentDashboard />} />
    <Route path="/admin/dashboard" element={<AdminDashboard />} />

    {/* auth */}
       <Route path="auth/login" element={<Login />} />
       <Route path="auth/register" element={<Register />} />
  </Routes>
  )
};

export default Router;
