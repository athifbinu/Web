import React from "react";

import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";

import Routers from "../router/Routers.jsx";
import { useLocation } from "react-router-dom";
import AdmHeader from "../components/AdminHeader/AdmHeader.jsx";

const Layout = () => {
  const location = useLocation();
  return (
    <>
      {location.pathname.startsWith("/Addcareers") ? <AdmHeader /> : <Header />}
      <div>
        <Routers />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
