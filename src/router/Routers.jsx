import React from "react";
import Home from "../pages/User/Home";
import Carrers from "../pages/User/Carrers";
import { Navigate, Route, Routes } from "react-router-dom";
import AddCarrers from "../pages/Admin/AddCarrers";

const Routers = () => {
  return (
    <Routes>
      {/* userside */}
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="home" element={<Home />} />
      <Route path="careers" element={<Carrers />} />

      {/* admin */}
      <Route path="/Addcareers" element={<AddCarrers />} />
    </Routes>
  );
};

export default Routers;
