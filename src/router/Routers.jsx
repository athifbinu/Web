import React from "react";
import Home from "../pages/User/Home";
import Carrers from "../pages/User/Carrers";
import { Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Admin/Dashboard";
import AddCarrers from "../pages/Admin/AddCarrers";
import ListCarrers from "../pages/Admin/ListCarrers";
import AddBlogs from "../pages/Admin/AddBlogs";
import ListBlogs from "../pages/Admin/ListBlogs";
const Routers = () => {
  return (
    <Routes>
      {/* user side */}
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="home" element={<Home />} />
      <Route path="careers" element={<Carrers />} />

      {/* admin side */}
      <Route path="/Dashboard" element={<Dashboard />} />
      <Route path="/Dashboard/AddCarrers" element={<AddCarrers />} />
      <Route path="/Dashboard/ListCarrers" element={<ListCarrers />} />
      <Route path="/Dashboard/AddBlogs" element={<AddBlogs />} />
      <Route path="/Dashboard/ListBlogs" element={<ListBlogs />} />
    </Routes>
  );
};

export default Routers;
