import React from "react";
import { Route, Routes } from "react-router";
import Layouts from "../Layouts/Layouts";

const Router = () => {

  return(
    <Routes>
    <Route path="/" element={<Layouts />} />
    {/* <Route path="about" element={<About />} />

    <Route element={<AuthLayout />}>
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
    </Route>

    <Route path="concerts">
      <Route index element={<ConcertsHome />} />
      <Route path=":city" element={<City />} />
      <Route path="trending" element={<Trending />} />
    </Route> */}
  </Routes>
  )
};

export default Router;
